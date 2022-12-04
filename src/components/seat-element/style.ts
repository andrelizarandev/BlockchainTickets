// Modules
import { amber } from '@mui/material/colors';

const SeatElementStyle = {

  MainContainer (inUse:boolean) {
    return {
      borderRadius:2,
      border:`2px solid ${inUse ? amber[500] : 'white' }`,
      width:'50px',
      height:'50px',
      cursor:'pointer'
    }
  },

  GridContainer: {
    display:'flex',
    justifyContent:'center',
  }

}

export default SeatElementStyle;