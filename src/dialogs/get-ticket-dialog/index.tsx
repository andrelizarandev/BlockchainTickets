// Modules
import { 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  DialogActions, 
  Button,
  TextField,
  DialogContentText,
  Stack
} from '@mui/material';
import { useContext } from 'react';

// Context
import { DialogsContext } from '../../contexts/dialogs-context';

// Hooks
import useHandleForm from '../../hooks/use-handle-form';
import useHandleSeats from '../../hooks/use-handle-seats';

export default function GetTicketDialog () {

  const {
    closeAnyDialog,
    whichDialogIsOpen,
  } = useContext(DialogsContext);

  const { form, handleForm, setForm } = useHandleForm(initialState);
  const { ticketCode } = form;
  const { findSeat } = useHandleSeats();

  const startFindingSeat = () => findSeat(ticketCode);

  function cleanAndClose () {
    closeAnyDialog();
    setForm(initialState);
  }

  return (
    <Dialog open={whichDialogIsOpen === 'get-ticket'} onClose={cleanAndClose} fullWidth={true} maxWidth='sm'>
      <DialogTitle>Obtener Ticket</DialogTitle>
      <DialogContent>
        <Stack rowGap={2}>
          <DialogContentText>Ingresa el código de tu ticket para ser buscado en la sala</DialogContentText>
          <TextField label='Código de Ticket' value={ticketCode} onChange={handleForm} name='ticketCode'/>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={cleanAndClose}>Cancelar</Button>
        <Button onClick={startFindingSeat}>Buscar</Button>
      </DialogActions>
    </Dialog>
  )
}

const initialState = {
  ticketCode:''
}
