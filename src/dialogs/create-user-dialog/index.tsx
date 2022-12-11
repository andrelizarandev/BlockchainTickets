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
import { v4 as uuid } from 'uuid';
import { useContext } from 'react';

// Contexts
import { UiContext } from '../../contexts/ui-context';
import { DialogsContext } from '../../contexts/dialogs-context';
import { ContractContext } from '../../contexts/contract-context';

// Hooks
import useHandleForm from '../../hooks/use-handle-form';

export default function CreateUserDialog () {
 
  const {
    closeAnyDialog,
    whichDialogIsOpen,
  } = useContext(DialogsContext);

  const { form, setForm, handleForm } = useHandleForm(initialState);
  const { name, email, password } = form;
  const { setMessage } = useContext(UiContext);
  const { contractInstance, account } = useContext(ContractContext);
  const { openMessageDialog } = useContext(DialogsContext);

  function generateId () {
    return uuid().slice(0, 8);
  }

  async function createUser () {
    try {
      await contractInstance.methods.createUser(generateId(), name, email, password).send({ from:account });
      setMessage({ message:'Usuario creado', title:'Usuario creado con éxito' });
      openMessageDialog();
      setForm(initialState);
    } catch (err:any) {
      setMessage({ message:'Inténtelo de nuevo', title:'Error generando usuario' });
      openMessageDialog();
      setForm(initialState);
    }
  }

  return (
    <Dialog open={whichDialogIsOpen === 'create-user'} onClose={closeAnyDialog} fullWidth={true} maxWidth='sm'>
      <DialogTitle>Crear usuario</DialogTitle>
      <DialogContent>
        <Stack rowGap={3} mt={1}>
          <TextField 
            name='name' 
            onChange={handleForm} 
            value={name} 
            label='Nombre'
          />
          <TextField 
            name='email' 
            onChange={handleForm} 
            value={email} 
            label='Correo Electrónico'
            type='email'
          />
          <TextField 
            name='password' 
            onChange={handleForm} 
            value={password} 
            label='Contraseña'
            type='password'
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeAnyDialog}>Cancelar</Button>
        <Button onClick={createUser}>Crear Usuarios</Button>
      </DialogActions>
    </Dialog>
  )
}

const initialState = {
  email:'',
  name:'',
  password:''
}