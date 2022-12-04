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
import useHandleSeats from '../../hooks/use-handle-seats';

// Style
import FlexStyle from '../../style/flex';
import { DialogsContext } from '../../contexts/dialogs-context';

export default function RemoveTicketSeatDialog () {

  const { 
    selectedSeat,
    contractInstance,
    account
  } = useContext(CinemaRoomScreenContext);

  const {
    closeAnyDialog,
    whichDialogIsOpen
  } = useContext(DialogsContext);

  const {
    toggleSeatInUse
  } = useHandleSeats();

  async function removeTicket () {
    await contractInstance.methods.toggleInUse(selectedSeat?.id).send({ from:account });
    toggleSeatInUse(selectedSeat?.id!!, false);
  }

  return (
    <Dialog open={whichDialogIsOpen === 'remove-ticket'} onClose={closeAnyDialog} fullWidth={true} maxWidth='sm'>
      <DialogTitle>Remover Ticket</DialogTitle>
      <DialogContent>
        <Stack rowGap={2}>
          <DialogContentText>¿Está seguró de remover el ticket de este asiento?</DialogContentText>
        </Stack>
        <Stack sx={FlexStyle.FlexRowGap3} mt={3}>
          <TextField 
            value={selectedSeat?.column || ''} 
            label='Columna'
            fullWidth
            disabled
          />
          <TextField 
            value={selectedSeat?.row || ''} 
            label='Fila' 
            fullWidth
            disabled
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeAnyDialog}>Cancelar</Button>
        <Button onClick={removeTicket}>Remover</Button>
      </DialogActions>
    </Dialog>
  )
}
        