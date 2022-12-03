// Modules
import { Grid, Stack, Typography } from '@mui/material';

// Style
import LetterColumnsStyle from './style';

export default function LetterColumns () {

  function LetterChip (letter:string) {
    return (
      <Grid item md={1} sx={LetterColumnsStyle.GridContainer}>
        <Stack sx={LetterColumnsStyle.ChipContainer}>
          <Typography variant='caption'>{letter}</Typography>
        </Stack>
      </Grid>
    )
  }

  return (
    <Grid container sx={{ paddingX:4 }}>
      {data.map((letter) => LetterChip(letter))}
    </Grid>
  )
}

const data = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']
