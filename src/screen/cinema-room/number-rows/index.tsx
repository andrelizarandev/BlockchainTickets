// Modules
import { Grid, Stack, Typography } from '@mui/material';

// Style
import NumberRowsStyle from './style';

export default function NumberRows () {

  function LetterChip (letter:number) {
    return (
      <Stack sx={NumberRowsStyle.ChipContainer}>
        <Typography variant='caption'>{letter}</Typography>
      </Stack>
    )
  }

  return (
    <Grid md={1}>
      <Stack rowGap={6.8} sx={{ alignItems:'center', paddingTop:16 }}>
        {data.map((number) => LetterChip(number))}
      </Stack>
    </Grid>
  )
}

const data = [1, 2, 3, 4, 5, 6];