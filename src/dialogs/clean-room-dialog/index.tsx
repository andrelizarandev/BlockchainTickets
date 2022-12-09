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
import { ContractContext } from '../../contexts/contract-context';

// Contexts
import { UiContext } from '../../contexts/ui-context';
import { SeatsContext } from '../../contexts/seats-context';
import { DialogsContext } from '../../contexts/dialogs-context';

// Hooks
import useHandleSeats from '../../hooks/use-handle-seats';

export default function CleanRoomDialog () {

  const { contractInstance, account } = useContext(ContractContext);
  const { seats } = useContext(SeatsContext);
 
  const {
    closeAnyDialog,
    whichDialogIsOpen,
  } = useContext(DialogsContext);

  const { cleanSeats } = useHandleSeats();

  const {
    isLoadingAction 
  } = useContext(UiContext);

  async function cleanRoom () {
    var promiseArray:any[] = [];
    const filteredSeats = seats.filter((seat) => seat.idTicket);
    const mappedSeatsId = filteredSeats.map((seat) => seat.id);
    mappedSeatsId.forEach((id) => {
      const cleanPromise = contractInstance.methods.removeTicket(id).send({ from:account });
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
        <Button disabled={isLoadingAction} onClick={closeAnyDialog}>Cancelar</Button>
        <Button disabled={isLoadingAction} onClick={cleanRoom}>Limpiar</Button>
      </DialogActions>
    </Dialog>
  )
}
