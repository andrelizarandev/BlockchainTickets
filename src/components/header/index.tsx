// Modules
import { Stack, Typography } from '@mui/material';

// Style
import HeaderStyle from './style';

export default function Header () {
  return (
    <Stack sx={HeaderStyle.MainContainer}>
      <Stack sx={HeaderStyle.MainPaddingContainer}>
        <Typography variant='h6' color='white'>Cinema</Typography>
      </Stack>
    </Stack>
  )
}
