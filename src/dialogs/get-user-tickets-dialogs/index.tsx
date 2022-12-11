// Modules
import { 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  DialogActions, 
  Button,
  Stack,
  Typography,
  Alert
} from '@mui/material';
import { useContext, useEffect } from 'react';

// Context
import { UserContext } from '../../contexts/user-context';
import { DialogsContext } from '../../contexts/dialogs-context';

// Hooks
import useHandleSeats from '../../hooks/use-handle-seats';

// Syyles
import UserTicketsDialogsStyle from './style';

// Types
import { UserTicket } from '../../contexts/user-context/types';

export default function GetUserTicketsDialog () {

  const {
    closeAnyDialog,
    whichDialogIsOpen,
  } = useContext(DialogsContext);

  const {
    getUserTickets
  } = useHandleSeats();

  const { userTickets, setUserTickets } = useContext(UserContext);

  useEffect(() => {
    if (whichDialogIsOpen === 'user-tickets') getUserTickets();
  }, [whichDialogIsOpen]);

  function cleanAndClose () {
    setUserTickets([]);
    closeAnyDialog();
  }

  function UserTicket (props:UserTicket) {
    const { column, id, idSeat, row } = props;
    return (
      <Stack sx={UserTicketsDialogsStyle.MainContainer}>
        <Stack sx={UserTicketsDialogsStyle.MainPaddingContainer}>
          <Typography variant='subtitle1'>Ticket: {id}</Typography>
          <Typography variant='subtitle2'>Asiento: {idSeat}</Typography>
          <Typography variant='caption'>Columna: {column}</Typography>
          <Typography variant='caption'>Fila: {row}</Typography>
        </Stack>
      </Stack>
    )
  }

  return (
    <Dialog open={whichDialogIsOpen === 'user-tickets'} onClose={cleanAndClose} fullWidth={true} maxWidth='sm'>
      <DialogTitle>Tus Tickets</DialogTitle>
      <DialogContent>
        <Stack rowGap={3}>
          {userTickets.map((ticket, key) => <UserTicket {...ticket} key={key}/>)}
          {!userTickets.length && <Alert severity='error'>No has adquirido tickets</Alert>}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={cleanAndClose}>Aceptar</Button>
      </DialogActions>
    </Dialog>
  )
}