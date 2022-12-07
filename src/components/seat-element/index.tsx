// Modules
import { useContext } from 'react';
import { Stack, Grid, Tooltip } from '@mui/material';

// Context
import { SeatsContext } from '../../contexts/seats-context';
import { DialogsContext } from '../../contexts/dialogs-context';

// Style
import SeatElementStyle from './style'

// Types
import { SeatData } from '../../contexts/seats-context/types';
import { UiContext } from '../../contexts/ui-context';
import { UserContext } from '../../contexts/user-context';

export default function SeatElement (props:SeatData) {

  const { column, row, idTicket } = props;
  
  const { setSelectedSeat } = useContext(SeatsContext);
  const { setMessage } = useContext(UiContext);
  const { userData } = useContext(UserContext);

  const {
    openAddTicketDialog,
    openRemoveTicketSeatDialog,
    openMessageDialog
  } = useContext(DialogsContext);

  function selectSeat () {
    setSelectedSeat(props);
    if (idTicket) openRemoveTicketSeatDialog();
    else if (userData == null) showNoUserDialog();
    else openAddTicketDialog();
  }

  function showNoUserDialog () {
    setMessage({ 
      message:'Es necesario inicies sesión para poder comprar boletos', 
      title:'No has iniciado sesión' 
    });
    openMessageDialog();
  }

  return (
    <Grid sx={SeatElementStyle.GridContainer} md={1} item>
      <Tooltip title={`Silla ${row}, ${column}`} onClick={selectSeat}>
        <Stack sx={SeatElementStyle.MainContainer(idTicket)}/>
      </Tooltip>
    </Grid>
  )
}
