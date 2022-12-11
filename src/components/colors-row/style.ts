const ColorRowStyle = {
  ColorElement (color:string) {
    if (color === '#ffc107') 
      return {
        width:'20px',
        height:'20px',
        backgroundColor:color,
        borderRadius:1
      }
    else 
      return {
        width:'20px',
        height:'20px',
        border:'2px solid white',
        borderRadius:1
      }
  }
}

export default ColorRowStyle;