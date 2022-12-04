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
import { UiContext } from '../../contexts/ui-context';
import { SeatsContext } from '../../contexts/seats-context';
import { DialogsContext } from '../../contexts/dialogs-context';
import { ContractContext } from '../../contexts/contract-context';

// Hooks
import useHandleSeats from '../../hooks/use-handle-seats';

// Style
import FlexStyle from '../../style/flex';

export default function RemoveTicketSeatDialog () {

  const { selectedSeat } = useContext(SeatsContext);
  const { contractInstance, account } = useContext(ContractContext);

  const {
    closeAnyDialog,
    whichDialogIsOpen
  } = useContext(DialogsContext);

  const {
    toggleSeatInUse
  } = useHandleSeats();

  const { 
    toggleIsLoadingAction, 
    isLoadingAction 
  } = useContext(UiContext);

  async function removeTicket () {
    toggleIsLoadingAction(true);
    await contractInstance.methods.toggleInUse(selectedSeat?.id).send({ from:account });
    toggleSeatInUse(selectedSeat?.id!!, false);
    toggleIsLoadingAction(false);
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
        <Button disabled={isLoadingAction} onClick={closeAnyDialog}>Cancelar</Button>
        <Button disabled={isLoadingAction} onClick={removeTicket}>Remover</Button>
      </DialogActions>
    </Dialog>
  )
}
        