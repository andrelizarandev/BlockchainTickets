// Modules
import { 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  DialogActions, 
  Button,
  DialogContentText,
  Stack
} from '@mui/material';
import { useContext } from 'react';

// Contexts
import { DialogsContext } from '../../contexts/dialogs-context';
import { CinemaRoomScreenContext } from '../../screen/cinema-room';

// Hooks
import useHandleSeats from '../../hooks/use-handle-seats';

export default function CleanRoomDialog () {

  const { 
    seats,
    contractInstance,
    account
  } = useContext(CinemaRoomScreenContext);

  const {
    closeAnyDialog,
    whichDialogIsOpen,
  } = useContext(DialogsContext);

  const {
    cleanSeats
  } = useHandleSeats();

  async function cleanRoom () {
    var promiseArray:any[] = [];
    const filteredSeats = seats.filter((seat) => seat.inUse);
    const mappedSeatsId = filteredSeats.map((seat) => seat.id);
    mappedSeatsId.forEach((id) => {
      const cleanPromise = contractInstance.methods.toggleInUse(id).send({ from:account });
      promiseArray.push(cleanPromise)
    });
    await Promise.all(promiseArray);
    cleanSeats();
  }

  return (
    <Dialog open={whichDialogIsOpen === 'clean-room'} onClose={closeAnyDialog} fullWidth={true} maxWidth='sm'>
      <DialogTitle>Limpiar sala</DialogTitle>
      <DialogContent>
        <Stack>
          <DialogContentText>¿Está seguró de limpiar la sala</DialogContentText>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeAnyDialog}>Cancelar</Button>
        <Button onClick={cleanRoom}>Limpiar</Button>
      </DialogActions>
    </Dialog>
  )
}
