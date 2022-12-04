// Modules
import { useContext } from 'react';
import { DialogsContext } from '../../contexts/dialogs-context';
import { UiContext } from '../../contexts/ui-context';

// Contexts
import { CinemaRoomScreenContext } from '../../screen/cinema-room';

export default function useHandleSeats () {
  
  const { seats, setSeats } = useContext(CinemaRoomScreenContext);
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
