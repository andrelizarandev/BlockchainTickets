// Modules
import { useContext } from 'react';
import { Stack, Button } from '@mui/material';

// Components
import Header from '../../components/header';
import ColorsRow from '../../components/colors-row';

// Context Containers
import InformationContainer from './information-container';
import SeatsContextContainer from '../../contexts/seats-context';
import ContractContextContainer from '../../contexts/contract-context';
import UiContextContainer, { UiContext } from '../../contexts/ui-context';
import UserContextContainer, { UserContext } from '../../contexts/user-context';
import DialogsContextContainer, { DialogsContext } from '../../contexts/dialogs-context';

// Dialogs 
import SignInDialog from '../../dialogs/sign-in-dialog';
import MessageDialog from '../../dialogs/message-dialog';
import GetTicketDialog from '../../dialogs/get-ticket-dialog';
import CleanRoomDialog from '../../dialogs/clean-room-dialog';
import CreateUserDialog from '../../dialogs/create-user-dialog';
import NoEthereumDialog from '../../dialogs/no-ethereum-dialog';
import SellTicketsDialog from '../../dialogs/sell-ticket-dialog';
import GetUserTicketsDialog from '../../dialogs/get-user-tickets-dialogs';
import RemoveTicketSeatDialog from '../../dialogs/remove-ticket-seat-dialog';

// Hooks
import useHandleUser from '../../hooks/use-handle-user';

// Icons
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import LogoutIcon from '@mui/icons-material/Logout';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

// Style
import CinemaScreenStyle from './style';
import FlexStyle from '../../style/flex';

export default function CinemaRoomScreen () {

  function OptionContainer () {

    const { 
      openGetTicketDialog, 
      openCleanRoomDialog,
      openSignInDialog,
      openUserTicketsDialog,
      openCreateUserDialog,
    } = useContext(DialogsContext);
    const { isLoadingSeats } = useContext(UiContext);
    const { userData } = useContext(UserContext);
    const { signOut } = useHandleUser();

    return (
      <Stack sx={FlexStyle.FlexRowGap3} justifyContent='center'>   
        {userData && <Button 
          variant='contained' 
          startIcon={<ConfirmationNumberIcon/>}
          onClick={openUserTicketsDialog}
          disabled={isLoadingSeats}
        >Obtener boletos comprados</Button>}  
        {<Button 
          variant='contained' 
          startIcon={<GroupAddIcon/>}
          color='success'
          onClick={openCreateUserDialog}
          disabled={isLoadingSeats}
        >Crear Usuario</Button>}  
        {!userData && <Button 
          variant='contained' 
          startIcon={<AssignmentIndIcon/>}
          onClick={openSignInDialog}
          disabled={isLoadingSeats}
        >Iniciar Sesión</Button>}  
        <Button 
          variant='contained' 
          startIcon={<SearchIcon/>}
          onClick={openGetTicketDialog}
          disabled={isLoadingSeats}
          color='secondary'
        >Obtener ubicación de Ticket</Button> 
        <Button 
          variant='contained' 
          color='warning'
          startIcon={<DeleteIcon/>}
          onClick={openCleanRoomDialog}
          disabled={isLoadingSeats}
        >Limpiar sala</Button>
        {userData && <Button 
          variant='contained' 
          startIcon={<LogoutIcon/>}
          onClick={signOut}
          disabled={isLoadingSeats}
          color='error'
        >Cerrar Sesión</Button> }
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
              <RemoveTicketSeatDialog/>
              <CleanRoomDialog/>
              <MessageDialog/>
              <NoEthereumDialog/>
              <SignInDialog/>
              <GetUserTicketsDialog/>
              <CreateUserDialog/>
        
            </DialogsContextContainer>
          </SeatsContextContainer>
        </UserContextContainer>
      </ContractContextContainer>
    </UiContextContainer> 
  )
}

// function createId () {
//   const randomId = uuid().slice(0,8);
//   console.log(randomId)
// }