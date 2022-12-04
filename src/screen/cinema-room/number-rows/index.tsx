// Modules
import { Grid, Stack, Typography } from '@mui/material';

// Style
import NumberRowsStyle from './style';

export default function NumberRows () {

  function NumberChip ({ number }:any) {
    return (
      <Stack sx={NumberRowsStyle.ChipContainer}>
        <Typography variant='caption'>{number}</Typography>
      </Stack>
    )
  }

  return (
    <Grid md={1} item>
      <Stack rowGap={6.8} sx={{ alignItems:'center', paddingTop:12 }}>
        {data.map((number, key) => <NumberChip number={number} key={key}/>)}
      </Stack>
    </Grid>
  )
}

const data = [1, 2];