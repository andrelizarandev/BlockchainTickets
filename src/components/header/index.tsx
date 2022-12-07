// Modules
import { useContext } from 'react';
import { Stack, Typography } from '@mui/material';

// Contexts
import { UserContext } from '../../contexts/user-context';

// Style
import HeaderStyle from './style';

export default function Header () {

  const { userData } = useContext(UserContext);

  return (
    <Stack sx={HeaderStyle.MainContainer}>
      <Stack sx={HeaderStyle.MainPaddingContainer}>
        <Typography variant='h6' color='white'>Cinema</Typography>
        <Typography variant='subtitle2' color='white'>({userData?.name || 'Sin Usuario'})</Typography>
      </Stack>
    </Stack>
  )
}
