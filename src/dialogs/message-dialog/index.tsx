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

// Context
import { CinemaRoomScreenContext } from '../../screen/cinema-room';

export default function MessageDialog () {

  const { 
    whichDialogIsOpen, 
    closeAnyDialog, 
    message
  } = useContext(CinemaRoomScreenContext);

  return (
    <Dialog open={whichDialogIsOpen === 'message'} onClose={closeAnyDialog} fullWidth={true} maxWidth='sm'>
      <DialogTitle>{message?.title}</DialogTitle>
      <DialogContent>
        <Stack>
          <DialogContentText>{message?.message}</DialogContentText>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeAnyDialog}>Ok</Button>
      </DialogActions>
    </Dialog>
  )
}