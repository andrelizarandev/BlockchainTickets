// Modules
import { amber } from '@mui/material/colors';

const SeatElementStyle = {

  MainContainer (idTicket:string) {
    if (idTicket) 
    return {
      borderRadius:2,
      backgroundColor:amber[500],
      width:'50px',
      height:'50px',
      cursor:'pointer'
    }
    else 
    return {
      borderRadius:2,
      border:'2px solid white',
      width:'50px',
      height:'50px',
      cursor:'pointer'
    }
  },

  GridContainer: {
    display:'flex',
    justifyContent:'center',
    width:'50px !important',
    height:'50px !important',
  }

}

export default SeatElementStyle;