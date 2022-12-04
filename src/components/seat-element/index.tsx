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

export default function SeatElement (props:SeatData) {

  const { column, row, inUse } = props;
  
  const {  setSelectedSeat } = useContext(SeatsContext);

  const {
    openAddTicketDialog,
    openRemoveTicketSeatDialog
  } = useContext(DialogsContext);

  function selectSeat () {
    setSelectedSeat(props);
    if (inUse) openRemoveTicketSeatDialog();
    else openAddTicketDialog();
  }

  return (
    <Grid sx={SeatElementStyle.GridContainer} md={1} item>
      <Tooltip title={`Silla ${row}, ${column}`} onClick={selectSeat}>
        <Stack sx={SeatElementStyle.MainContainer(inUse)}/>
      </Tooltip>
    </Grid>
  )
}
