// Modules
import { Stack, Grid } from '@mui/material';

// Style
import SeatsRoomStyle from "./style";
import SeatElement from '../../../components/seat-element';

// Types
import { SeatData } from "../types";

export default function SeatsRoom () {

  return (
    <Stack sx={SeatsRoomStyle.MainContainerContainer}>
      <Stack sx={SeatsRoomStyle.MainPaddingContainer}>
        <Grid container rowGap={4}>
          {data.map((seat, key) => <SeatElement {...seat} key={key}/>)}
        </Grid>
      </Stack>
    </Stack>
  )
} 

const data:SeatData[] = [
  { id:1, column:'A', row:1 },
  { id:2, column:'B', row:1 },
  { id:3, column:'C', row:1 },
  { id:4, column:'D', row:1 },
  { id:5, column:'E', row:1 },
  { id:6, column:'F', row:1 },
  { id:7, column:'G', row:1 },
  { id:8, column:'H', row:1 },
  { id:9, column:'I', row:1 },
  { id:10, column:'J', row:1 },
  { id:11, column:'K', row:1 },
  { id:12, column:'L', row:1 },

  { id:13, column:'A', row:2 },
  { id:14, column:'B', row:2 },
  { id:15, column:'C', row:2 },
  { id:16, column:'D', row:2 },
  { id:17, column:'E', row:2 },
  { id:18, column:'F', row:2 },
  { id:19, column:'G', row:2 },
  { id:20, column:'H', row:2 },
  { id:21, column:'I', row:2 },
  { id:22, column:'J', row:2 },
  { id:23, column:'K', row:2 },
  { id:24, column:'L', row:2 },

  { id:25, column:'A', row:3 },
  { id:26, column:'B', row:3 },
  { id:27, column:'C', row:3 },
  { id:28, column:'D', row:3 },
  { id:29, column:'E', row:3 },
  { id:30, column:'F', row:3 },
  { id:31, column:'G', row:3 },
  { id:32, column:'H', row:3 },
  { id:33, column:'I', row:3 },
  { id:34, column:'J', row:3 },
  { id:35, column:'K', row:3 },
  { id:36, column:'L', row:3 },

  { id:37, column:'A', row:4 },
  { id:38, column:'B', row:4 },
  { id:39, column:'C', row:4 },
  { id:40, column:'D', row:4 },
  { id:41, column:'E', row:4 },
  { id:42, column:'F', row:4 },
  { id:43, column:'G', row:4 },
  { id:44, column:'H', row:4 },
  { id:45, column:'I', row:4 },
  { id:46, column:'J', row:4 },
  { id:47, column:'K', row:4 },
  { id:48, column:'L', row:4 },

  { id:49, column:'A', row:5 },
  { id:50, column:'B', row:5 },
  { id:51, column:'C', row:5 },
  { id:52, column:'D', row:5 },
  { id:53, column:'E', row:5 },
  { id:54, column:'F', row:5 },
  { id:55, column:'G', row:5 },
  { id:56, column:'H', row:5 },
  { id:57, column:'I', row:5 },
  { id:58, column:'J', row:5 },
  { id:59, column:'K', row:5 },
  { id:60, column:'L', row:5 },

  { id:61, column:'A', row:6 },
  { id:62, column:'B', row:6 },
  { id:63, column:'C', row:6 },
  { id:64, column:'D', row:6 },
  { id:65, column:'E', row:6 },
  { id:66, column:'F', row:6 },
  { id:67, column:'G', row:6 },
  { id:68, column:'H', row:6 },
  { id:69, column:'I', row:6 },
  { id:70, column:'J', row:6 },
  { id:71, column:'K', row:6 },
  { id:72, column:'L', row:6 },
]