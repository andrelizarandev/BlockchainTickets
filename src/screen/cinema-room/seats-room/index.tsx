// Modules
import { useContext } from 'react';
import { Stack, Grid } from '@mui/material';

// Contexts
import { CinemaRoomScreenContext } from '..';

// Style
import SeatsRoomStyle from "./style";
import SeatElement from '../../../components/seat-element';

export default function SeatsRoom () {

  const { seats } = useContext(CinemaRoomScreenContext);

  return (
    <Stack sx={SeatsRoomStyle.MainContainerContainer}>
      <Stack sx={SeatsRoomStyle.MainPaddingContainer}>
        <Grid container rowGap={4}>
          {seats.map((seat, key) => <SeatElement {...seat} key={key}/>)}
        </Grid>
      </Stack>
    </Stack>
  )
};