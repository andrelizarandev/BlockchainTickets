// Colors
import { amber, indigo } from '@mui/material/colors';
import { Stack, Box, Typography } from '@mui/material';

// Style
import ColorRowStyle from './style';
import FlexStyle from '../../style/flex';

// Types
import { ColorData } from './types'

export default function ColorsRow () {

  function ColorElement (props:ColorData) {
    const { color, title } = props;
    return (
      <Stack sx={FlexStyle.FlexRowGap2}>
        <Box sx={ColorRowStyle.ColorElement(color)}/>
        <Typography variant='subtitle2' color='white'>{title}</Typography>
      </Stack>
    )
  }

  return (
    <Stack sx={FlexStyle.FlexRowAlignCenterJustifyBetween} width='1000px'>
      <Stack sx={FlexStyle.FlexRowGap3}>
        {data.map((color, key) => <ColorElement {...color} key={key}/>)}
      </Stack>
      <ColorElement color={indigo[900]} title={`Total de boletos vendidos hoy: 0`}/>
    </Stack>
  )
}

const data:ColorData[] = [
  { color:'white', title:'Libre' },
  { color:amber[500], title:'Ocupado' },
]