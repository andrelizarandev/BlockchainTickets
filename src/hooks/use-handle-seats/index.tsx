// Modules
import { useContext } from 'react';

// Contexts
import { UiContext } from '../../contexts/ui-context';
import { SeatsContext } from '../../contexts/seats-context';
import { DialogsContext } from '../../contexts/dialogs-context';

export default function useHandleSeats () {
  
  const { seats, setSeats } = useContext(SeatsContext);
  const { setMessage } = useContext(UiContext);
  const { openMessageDialog } = useContext(DialogsContext);

  function toggleSeatInUse (id:number, added:boolean) {
    openMessageDialog();
    setMessage(added 
      ? { message:'Ticket vendido con éxito', title:'Ticket vendido' } 
      : { message:'Ticket removido con éxito', title:'Ticket removido' }
    );
    const mappedSeats = seats.map((seat) => {
      if (seat.id === id) return ({ ...seat, inUse:!seat.inUse });
      else return seat;
    });
    setSeats(mappedSeats);
  }

  function cleanSeats () {
    const newSeats = seats.map((seat) => ({ ...seat, inUse:false }));
    setSeats(newSeats);
    setMessage({ title:'Sala limpiada', message:'Sala limpiada con éxito' });
    openMessageDialog();
  }

  return {
    toggleSeatInUse,
    cleanSeats
  }

}
