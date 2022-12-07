// Modules
import { v4 as uuid } from 'uuid';
import { useContext } from 'react';
import { Stack, Button } from '@mui/material';

// Components
import Header from '../../components/header';
import ColorsRow from '../../components/colors-row';

// Context Containers
import InformationContainer from './information-container';
import UserContextContainer from '../../contexts/user-context';
import SeatsContextContainer from '../../contexts/seats-context';
import ContractContextContainer from '../../contexts/contract-context';
import UiContextContainer, { UiContext } from '../../contexts/ui-context';
import DialogsContextContainer, { DialogsContext } from '../../contexts/dialogs-context';

// Dialogs 
import SignInDialog from '../../dialogs/sign-in-dialog';
import MessageDialog from '../../dialogs/message-dialog';
import GetTicketDialog from '../../dialogs/get-ticket-dialog';
import CleanRoomDialog from '../../dialogs/clean-room-dialog';
import NoEthereumDialog from '../../dialogs/no-ethereum-dialog';
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

export default function CinemaRoomScreen () {

  function OptionContainer () {

    const { openGetTicketDialog, openCleanRoomDialog, openSignInDialog } = useContext(DialogsContext);
    const { isLoadingSeats } = useContext(UiContext);


    function createId () {
      const randomId = uuid().slice(0,8);
      console.log(randomId)
    }

    return (
      <Stack sx={FlexStyle.FlexRowGap3} justifyContent='center'>   
        <Button 
          variant='contained' 
          startIcon={<SearchIcon/>}
          onClick={openSignInDialog}
          disabled={isLoadingSeats}
        >Iniciar Sesión</Button>  
        <Button 
          variant='contained' 
          startIcon={<SearchIcon/>}
          onClick={openGetTicketDialog}
          disabled={isLoadingSeats}
          color='secondary'
        >Obtener ubicación de Ticket</Button> 
        <Button 
          variant='contained' 
          color='error'
          startIcon={<DeleteIcon/>}
          onClick={openCleanRoomDialog}
          disabled={isLoadingSeats}
        >Limpiar sala</Button>
      </Stack>
    )
  }

  return (
    <UiContextContainer> 
      <ContractContextContainer>
        <UserContextContainer>
          <SeatsContextContainer>
            <DialogsContextContainer>

              <Stack sx={CinemaScreenStyle.MainContainer}>
                <Header/>
                <Stack sx={CinemaScreenStyle.MainPaddingContainer}>
                  <OptionContainer/>
                  <InformationContainer/>
                  <ColorsRow/>
                </Stack>
              </Stack>

              <SellTicketsDialog/>
              <GetTicketDialog/>
              <ShowTicketSeatDialog/>
              <RemoveTicketSeatDialog/>
              <CleanRoomDialog/>
              <MessageDialog/>
              <NoEthereumDialog/>
              <SignInDialog/>
        
            </DialogsContextContainer>
          </SeatsContextContainer>
        </UserContextContainer>
      </ContractContextContainer>
    </UiContextContainer> 
  )
}
