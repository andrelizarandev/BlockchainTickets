// Modules
import { useContext } from 'react'
import { 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  DialogActions, 
  Button, 
  Stack, 
  TextField 
} from '@mui/material';

// Types
import { CinemaRoomScreenContext } from '../../screen/cinema-room';

// Style
import FlexStyle from '../../style/flex'

export default function ShowTicketSeatDialog () {

  const { 
    closeAnyDialog, 
    whichDialogIsOpen 
  } = useContext(CinemaRoomScreenContext);

  return (
    <Dialog open={whichDialogIsOpen === 'show-ticket-seat'} onClose={closeAnyDialog} fullWidth={true} maxWidth='sm'>
      <DialogTitle>Posición de tu Ticket</DialogTitle>
      <DialogContent>
        <Stack sx={FlexStyle.FlexRowGap3} mt={1}>
          <TextField 
            label='Fila' 
            value={'1'} 
            disabled
            fullWidth
          />
          <TextField 
            label='Fila' 
            value={'A'} 
            disabled
            fullWidth
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeAnyDialog}>Ok</Button>
      </DialogActions>
    </Dialog>
  )
}
