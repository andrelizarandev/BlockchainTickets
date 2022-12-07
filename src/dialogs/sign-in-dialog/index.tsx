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

// Context
import { DialogsContext } from '../../contexts/dialogs-context';

// Hooks
import useHandleForm from '../../hooks/use-handle-form';
import useHandleUser from '../../hooks/use-handle-user';

export default function SignInDialog () {

  const { 
    closeAnyDialog, 
    whichDialogIsOpen 
  } = useContext(DialogsContext);

  const { form, handleForm } = useHandleForm(initialState);
  const { email, password } = form;
  const { signIn } = useHandleUser();
  const startSignIn = () => signIn(email, password);

  return (
    <Dialog open={whichDialogIsOpen === 'sign-in'} fullWidth={true} maxWidth='sm'>
      <DialogTitle>Iniciar Sesión</DialogTitle>
      <DialogContent>
        <Stack rowGap={3} mt={1}>
          <TextField 
            label='Email' 
            value={email} 
            onChange={handleForm}
            fullWidth
            type='email'
            name='email'
          />
          <TextField 
            label='Contraseña' 
            value={password} 
            onChange={handleForm}
            name='password'
            fullWidth
            type='password'
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeAnyDialog}>Cancelar</Button>
        <Button onClick={startSignIn}>Iniciar Sesión</Button>
      </DialogActions>
    </Dialog>
  )
}

const initialState = {
  email:'andrelizaran@gmail.com',
  password:'HelloWorld123',
}