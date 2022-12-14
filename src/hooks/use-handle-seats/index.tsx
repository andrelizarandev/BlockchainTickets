// Modules
import { v4 as uuid } from 'uuid';
import { useContext } from 'react';

// Contexts
import { UiContext } from '../../contexts/ui-context';
import { UserContext } from '../../contexts/user-context';
import { SeatsContext } from '../../contexts/seats-context';
import { DialogsContext } from '../../contexts/dialogs-context';
import { ContractContext } from '../../contexts/contract-context';

// Types
import { SeatData } from '../../contexts/seats-context/types';

export default function useHandleSeats () {
  
  const { seats, setSeats, selectedSeat, setIsRoomEmpty } = useContext(SeatsContext);
  const { setMessage } = useContext(UiContext);
  const { openMessageDialog } = useContext(DialogsContext);
  const { contractInstance, account } = useContext(ContractContext);
  const { userData, setUserTickets } = useContext(UserContext);

  async function getSeats () {
    var promiseArray:any[] = [];
    for (let i = 0; i < 24; i++) {
      const seatPromise = contractInstance.methods.getSeat(i).call();
      promiseArray.push(seatPromise)
    }
    const response = await Promise.all(promiseArray);
    const parsedSeats:SeatData[] = response.map(({ row, idTicket, id, column }) => {
      if (idTicket) setIsRoomEmpty(false);
      return { 
        row:String(row), 
        column:String(column),
        id:String(id), 
        idTicket:String(idTicket), 
      }
    });
    setSeats(parsedSeats);
  }

  function cleanSeats () {
    const newSeats = seats.map((seat) => ({ ...seat, idTicket:'' }));
    setSeats(newSeats);
    setMessage({ title:'Sala limpiada', message:'Sala limpiada con éxito' });
    openMessageDialog();
    setIsRoomEmpty(true);
  }

  function findSeat (id:string) {
    const filteredSeats = seats.filter((seat) => seat.idTicket === id);
    if (filteredSeats.length > 0) {
      setMessage({ 
        title:'Asiento encontrado', 
        message:`Tu asiento pertence a la fila ${filteredSeats[0].row} y columna ${filteredSeats[0].column}`
      });
      openMessageDialog();
    } else {
      setMessage({ 
        title:'Asiento no encontrado', 
        message:`No se ha encontrado asiento con este código de ticket`
      });
      openMessageDialog();
    }
  }

  function generateId () {
    return uuid();
  }

  async function buyTicket () {
    try {
      const id = generateId();
      await contractInstance.methods.sellTicket(
        id,
        selectedSeat?.id,
        userData?.id
      ).send({ from: account });
      updateSeatTicket(id, selectedSeat?.id!!);
      setMessage({ title:'Boleto vendido', message:`El código del ticket es ${id}` });
      openMessageDialog();
      setIsRoomEmpty(false);
    } catch (err:any) {
      setMessage({ title:'Error vendiendo boleto', message:`Intente de nuevo` });
      openMessageDialog();
    } 
  }

  async function removeTicket () {
    try {
      await contractInstance.methods.removeTicket(selectedSeat?.id).send({ from: account });
      updateSeatTicket("", selectedSeat?.id!!);
      setMessage({ title:'Boleto removido', message:`Boleto removido con éxito` });
      openMessageDialog();   
    } catch (err:any) {
      setMessage({ title:'Error removiento boleto', message:`Intente de nuevo` });
      openMessageDialog();
    } 
  }

  function updateSeatTicket (idTicket:string, idSeat:string) {
    const newSeats = seats.map((seat) => ({ ...seat, idTicket:seat.id === idSeat ? idTicket : seat.idTicket }));
    setSeats(newSeats);
    const filteredSeats = newSeats.filter(({ idTicket }) => idTicket);
    setIsRoomEmpty(filteredSeats.length === 0);
  } 

  async function getUserTickets () {
    try {
      const response = await contractInstance.methods.getUserTickets(userData?.id).call();
      const tickets = response.split(',');
      const filteredTickets:string[] = tickets.filter((ticket:any) => ticket);
      var ticketsPromise = filteredTickets.map((ticket) => contractInstance.methods.getTicketById(ticket).call());
      const ticketsData = await Promise.all(ticketsPromise);
      const mappedTickets = ticketsData.map(({ column, id, idSeat, row, idTicket}) => ({ column, id, idSeat, row, idTicket }));
      setUserTickets(mappedTickets);
    } catch (err:any) {
      setMessage({ title:'Error buscando tus tickets', message:`Intente de nuevo` });
      openMessageDialog();
    }
  }

  return {
    getSeats,
    cleanSeats,
    findSeat,
    buyTicket,
    removeTicket,
    getUserTickets
  }

}
