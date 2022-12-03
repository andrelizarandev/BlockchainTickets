// Modules
import { useContext } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  DialogActions, 
  Button, 
  Stack, 
  TextField 
} from '@mui/material';

// Style
import FlexStyle from '../../style/flex';

// Types
import { CinemaRoomScreenContext } from '../../screen/cinema-room';

export default function SellTicketsDialog () {

  const { 
    closeAnyDialog, 
    whichDialogIsOpen, 
    selectedSeat
  } = useContext(CinemaRoomScreenContext);

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
        <Button onClick={closeAnyDialog}>Vender</Button>
      </DialogActions>
    </Dialog>
  )
}
