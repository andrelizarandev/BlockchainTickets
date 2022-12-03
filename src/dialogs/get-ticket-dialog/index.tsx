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
import { CinemaRoomScreenContext } from '../../screen/cinema-room';

// Hooks
import useHandleForm from '../../hooks/use-handle-form';

export default function GetTicketDialog () {

  const { 
    closeAnyDialog, 
    whichDialogIsOpen,
    openShowTicketSeatDialog
  } = useContext(CinemaRoomScreenContext);

  const { form, handleForm } = useHandleForm(initialState);
  const { ticketCode } = form;

  function findSeat () {
    openShowTicketSeatDialog();
  }

  return (
    <Dialog open={whichDialogIsOpen === 'get-ticket'} onClose={closeAnyDialog} fullWidth={true} maxWidth='sm'>
      <DialogTitle>Obtener Ticket</DialogTitle>
      <DialogContent>
        <Stack rowGap={2}>
          <DialogContentText>Ingresa el código de tu ticket para ser buscado en la sala</DialogContentText>
          <TextField label='Código de Ticket' value={ticketCode} onChange={handleForm} name='ticketCode'/>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeAnyDialog}>Cancelar</Button>
        <Button onClick={findSeat}>Buscar</Button>
      </DialogActions>
    </Dialog>
  )
}

const initialState = {
  ticketCode:''
}
