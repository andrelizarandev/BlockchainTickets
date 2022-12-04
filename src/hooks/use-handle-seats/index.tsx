// Modules
import { useContext } from 'react';

// Contexts
import { CinemaRoomScreenContext } from '../../screen/cinema-room';

export default function useHandleSeats () {
  
  const { seats, setSeats, openMessageDialog, setMessage } = useContext(CinemaRoomScreenContext);

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
