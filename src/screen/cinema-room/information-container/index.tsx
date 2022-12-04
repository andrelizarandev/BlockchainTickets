// Modules
import { useContext } from "react";
import { Stack, CircularProgress } from "@mui/material";

// Components
import SeatsRoom from "../seats-room";
import LetterColumns from "../letter-columns";

// Contexts
import { UiContext } from "../../../contexts/ui-context";

// Hooks
import useHandleContract from "../../../hooks/use-handle-contract";

export default function InformationContainer () {

  const { isLoadingSeats } = useContext(UiContext);
  useHandleContract();

  if (isLoadingSeats) return <CircularProgress sx={{ color:'white' }}/>
  else return (
    <Stack rowGap={2}>
      <LetterColumns/>
      <SeatsRoom/>
    </Stack>
  )
 }