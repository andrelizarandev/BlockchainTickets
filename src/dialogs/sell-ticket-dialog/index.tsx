// Modules
import { 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  DialogActions, 
  Button, 
  Stack, 
  TextField 
} from '@mui/material';
import { useContext } from 'react';
import { ContractContext } from '../../contexts/contract-context';

// Contexts
import { UiContext } from '../../contexts/ui-context';
import { SeatsContext } from '../../contexts/seats-context';
import { DialogsContext } from '../../contexts/dialogs-context';

// Hooks
import useHandleSeats from '../../hooks/use-handle-seats';

// Style
import FlexStyle from '../../style/flex';

export default function SellTicketsDialog () {
  
  const { selectedSeat } = useContext(SeatsContext);
  const { contractInstance, account } = useContext(ContractContext);

  const {
    closeAnyDialog,
    whichDialogIsOpen
  } = useContext(DialogsContext);
  
  const {
    toggleSeatInUse
  } = useHandleSeats();

  const { toggleIsLoadingAction, isLoadingAction } = useContext(UiContext);

  async function sellTicket () {
    toggleIsLoadingAction(true);
    await contractInstance.methods.toggleInUse(selectedSeat?.id).send({ from:account });
    toggleSeatInUse(selectedSeat?.id!!, true);
    toggleIsLoadingAction(false);
  }

  return (
    <Dialog open={whichDialogIsOpen === 'add-ticket'} onClose={closeAnyDialog} fullWidth={true} maxWidth='sm'>
      <DialogTitle>Venta de Tickets</DialogTitle>
      <DialogContent>
        <Stack sx={FlexStyle.FlexRowGap3} mt={1}>
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
        <Button disabled={isLoadingAction} onClick={sellTicket}>Vender</Button>
      </DialogActions>
    </Dialog>
  )
}
