// Modules
import { 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  DialogContentText,
  Stack
} from '@mui/material';
import { useContext } from 'react';

// Context
import { DialogsContext } from '../../contexts/dialogs-context';

export default function NoEthereumDialog () {

  const { whichDialogIsOpen } = useContext(DialogsContext);

  return (
    <Dialog 
      open={whichDialogIsOpen === 'no-ethereum'} 
      fullWidth={true} 
      maxWidth='sm' 
      disableEscapeKeyDown={true}
    >
      <DialogTitle>No cuentas con acceso a MetaMask</DialogTitle>
      <DialogContent>
        <Stack>
          <DialogContentText>Es necesario utilices la extensión de MetaMask para Chrome</DialogContentText>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}