// Modules
import { useContext } from 'react';
import { Stack, Grid } from '@mui/material';

// Components
import SeatElement from '../../../components/seat-element';

// Contexts
import { SeatsContext } from '../../../contexts/seats-context';

// Hooks
import useHandleContract from '../../../hooks/use-handle-contract';

// Style
import SeatsRoomStyle from "./style";

export default function SeatsRoom () {

  const { seats } = useContext(SeatsContext);
  useHandleContract();

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