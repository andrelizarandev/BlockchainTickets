// Modules
import { 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  DialogActions, 
  Button,
  Stack
} from '@mui/material';
import { useContext, useEffect } from 'react';

// Context
import { DialogsContext } from '../../contexts/dialogs-context';
import useHandleSeats from '../../hooks/use-handle-seats';

export default function GetUserTicketsDialog () {

  const {
    closeAnyDialog,
    whichDialogIsOpen,
  } = useContext(DialogsContext);

  const {
    getUserTickets
  } = useHandleSeats();

  useEffect(() => {
    if (whichDialogIsOpen === 'user-tickets') getUserTickets();
  }, [whichDialogIsOpen]);

  return (
    <Dialog open={whichDialogIsOpen === 'user-tickets'} onClose={closeAnyDialog} fullWidth={true} maxWidth='sm'>
      <DialogTitle>Tus Ticket</DialogTitle>
      <DialogContent>
        <Stack rowGap={3}>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeAnyDialog}>Cancelar</Button>
        <Button onClick={closeAnyDialog}>Aceptar</Button>
      </DialogActions>
    </Dialog>
  )
}