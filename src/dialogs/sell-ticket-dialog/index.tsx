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
import { DialogsContext } from '../../contexts/dialogs-context';
import { SeatsContext } from '../../contexts/seats-context';

// Hooks
import useHandleSeats from '../../hooks/use-handle-seats';

// Style
import FlexStyle from '../../style/flex';

// Types

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

  async function sellTicket () {
    await contractInstance.methods.toggleInUse(selectedSeat?.id).send({ from:account });
    toggleSeatInUse(selectedSeat?.id!!, true);
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
        <Button onClick={closeAnyDialog}>Cancelar</Button>
        <Button onClick={sellTicket}>Vender</Button>
      </DialogActions>
    </Dialog>
  )
}
