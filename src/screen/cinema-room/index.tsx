// Modules
import { useContext } from 'react';
import { Stack, Button } from '@mui/material';

// Components
import Header from '../../components/header';
import ColorsRow from '../../components/colors-row';

// Context Containers
import UiContextContainer from '../../contexts/ui-context';
import DialogsContextContainer, { DialogsContext } from '../../contexts/dialogs-context';

// Dialogs 
import MessageDialog from '../../dialogs/message-dialog';
import InformationContainer from './information-container';
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
import SeatsContextContainer from '../../contexts/seats-context';
import ContractContextContainer from '../../contexts/contract-context';
import NoEthereumDialog from '../../dialogs/no-ethereum-dialog';

export default function CinemaRoomScreen () {

  function OptionContainer () {
    const { openGetTicketDialog, openCleanRoomDialog } = useContext(DialogsContext);
    return (
      <Stack sx={FlexStyle.FlexRowGap3} justifyContent='center'>    
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
    <UiContextContainer> 
      <ContractContextContainer>
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
        
            </DialogsContextContainer>
        </SeatsContextContainer>
      </ContractContextContainer>
    </UiContextContainer> 
  )
}
