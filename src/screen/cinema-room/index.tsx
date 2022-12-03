// Modules
import { useState, createContext } from 'react';
import { Stack, Button, Grid } from '@mui/material';

// Components
import SeatsRoom from './seats-room';
import NumberRows from './number-rows';
import LetterColumns from './letter-columns';
import Header from '../../components/header';
import ColorsRow from '../../components/colors-row';
import AboutContainer from '../../components/about-container';

// Dialogs 
import GetTicketDialog from '../../dialogs/get-ticket-dialog';
import CleanRoomDialog from '../../dialogs/clean-room-dialog';
import SellTicketsDialog from '../../dialogs/sell-ticket-dialog';
import ShowTicketSeatDialog from '../../dialogs/show-ticket-seat-dialog';
import RemoveTicketSeatDialog from '../../dialogs/remove-ticket-seat-dialog';

// Icons
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';

// Style
import CinemaScreenStyle from './style';
import FlexStyle from '../../style/flex';

// Types
import { CinemaRoomScreenContextPayload, DialogOptions, SeatData } from './types';

export const CinemaRoomScreenContext = createContext({} as CinemaRoomScreenContextPayload);

export default function CinemaRoomScreen () {

  const [ whichDialogIsOpen, setWhichDialogIsOpen ] = useState<DialogOptions>(null);
  const [ selectedSeat, setSelectedSeat ] = useState<SeatData | null>(null);

  const openAddTicketDialog = () => setWhichDialogIsOpen('add-ticket');
  const openGetTicketDialog = () => setWhichDialogIsOpen('get-ticket');
  const openShowTicketSeatDialog = () => setWhichDialogIsOpen('show-ticket-seat');
  const openRemoveTicketSeatDialog = () => setWhichDialogIsOpen('remove-ticket');
  const openCleanRoomDialog = () => setWhichDialogIsOpen('clean-room');
  const closeAnyDialog = () => setWhichDialogIsOpen(null);
  const closeAnyDialogAndCleanSelectedSeat = () => { closeAnyDialog(); setSelectedSeat(null) }

  const payload:CinemaRoomScreenContextPayload = {
    whichDialogIsOpen,
    openAddTicketDialog,
    openShowTicketSeatDialog,
    openRemoveTicketSeatDialog,
    openCleanRoomDialog,
    closeAnyDialog,
    selectedSeat,
    setSelectedSeat,
    closeAnyDialogAndCleanSelectedSeat
  }

  function OptionContainer () {
    return (
      <Stack sx={FlexStyle.FlexRowGap3}>    
        <Button 
          variant='contained' 
          startIcon={<SearchIcon/>}
          onClick={openGetTicketDialog}
        >Obtener ubicación de Ticket</Button> 
        <Button 
          variant='contained' 
          color='error'
          startIcon={<DeleteIcon/>}
          onClick={openCleanRoomDialog}
        >Limpiar sala</Button>
      </Stack>
    )
  }

  return (
    <CinemaRoomScreenContext.Provider value={payload}>
      
      <Stack sx={CinemaScreenStyle.MainContainer}>
        <Header/>
        <Stack sx={CinemaScreenStyle.MainPaddingContainer}>
          <OptionContainer/>
          <Grid container spacing={4} sx={CinemaScreenStyle.GridContainer}>
            <Grid item md={11}>
              <Stack rowGap={2}>
                <LetterColumns/>
                <SeatsRoom/>
              </Stack>
            </Grid>
            <NumberRows/>
          </Grid> 
          <ColorsRow/>
          <AboutContainer/>
        </Stack>
      </Stack>

      <SellTicketsDialog/>
      <GetTicketDialog/>
      <ShowTicketSeatDialog/>
      <RemoveTicketSeatDialog/>
      <CleanRoomDialog/>

    </CinemaRoomScreenContext.Provider>
  )
}



