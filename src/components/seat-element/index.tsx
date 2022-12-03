// Modules
import { useContext } from 'react';
import { Stack, Grid, Tooltip } from '@mui/material';

// Context
import { CinemaRoomScreenContext } from '../../screen/cinema-room';

// Style
import SeatElementStyle from './style'

// Types
import { SeatData } from '../../screen/cinema-room/types';

export default function SeatElement (props:SeatData) {

  const { column, row } = props;
  const { openAddTicketDialog, setSelectedSeat, openRemoveTicketSeatDialog } = useContext(CinemaRoomScreenContext);

  function selectSeat () {
    openRemoveTicketSeatDialog();
    setSelectedSeat(props);
  }

  return (
    <Grid sx={SeatElementStyle.GridContainer} md={1} item>
      <Tooltip title={`Silla ${row}, ${column}`} onClick={selectSeat}>
        <Stack sx={SeatElementStyle.MainContainer}/>
      </Tooltip>
    </Grid>
  )
}
