// Modules
import { useContext } from 'react';

// Contexts
import { UiContext } from '../../contexts/ui-context';
import { SeatsContext } from '../../contexts/seats-context';
import { DialogsContext } from '../../contexts/dialogs-context';
import { ContractContext } from '../../contexts/contract-context';

// Types
import { SeatData } from '../../contexts/seats-context/types';

export default function useHandleSeats () {
  
  const { seats, setSeats } = useContext(SeatsContext);
  const { setMessage } = useContext(UiContext);
  const { openMessageDialog } = useContext(DialogsContext);
  const { contractInstance } = useContext(ContractContext);

  async function getSeats () {
    var promiseArray:any[] = [];
    for (let i = 0; i < 24; i++) {
      const seatPromise = contractInstance.methods.getSeat(i).call();
      promiseArray.push(seatPromise)
    }
    const response = await Promise.all(promiseArray);
    console.log(response);
    const parsedSeats:SeatData[] = response.map(({ row, idTicket, id, column }) => ({ 
      row:String(row), 
      column:String(column),
      id:String(id), 
      idTicket:String(idTicket), 
    }));
    setSeats(parsedSeats);
  }

  function cleanSeats () {
    const newSeats = seats.map((seat) => ({ ...seat, inUse:false }));
    setSeats(newSeats);
    setMessage({ title:'Sala limpiada', message:'Sala limpiada con éxito' });
    openMessageDialog();
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

  return {
    getSeats,
    cleanSeats,
    findSeat
  }

}
