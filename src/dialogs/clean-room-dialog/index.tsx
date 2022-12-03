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

export default function CleanRoomDialog () {

  const { 
    whichDialogIsOpen, 
    closeAnyDialog, 
  } = useContext(CinemaRoomScreenContext);

  return (
    <Dialog open={whichDialogIsOpen === 'clean-room'} onClose={closeAnyDialog} fullWidth={true} maxWidth='sm'>
      <DialogTitle>Limpiar sala</DialogTitle>
      <DialogContent>
        <Stack>
          <DialogContentText>¿Está seguró de limpiar la sala</DialogContentText>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeAnyDialog}>Cancelar</Button>
        <Button onClick={closeAnyDialog}>Limpiar</Button>
      </DialogActions>
    </Dialog>
  )
}
