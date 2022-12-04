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
import { DialogsContext } from '../../contexts/dialogs-context';
import { UiContext } from '../../contexts/ui-context';

// Context
import { CinemaRoomScreenContext } from '../../screen/cinema-room';

export default function MessageDialog () {

  const { message } = useContext(UiContext);

  const {
    closeAnyDialog,
    whichDialogIsOpen
  } = useContext(DialogsContext);

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