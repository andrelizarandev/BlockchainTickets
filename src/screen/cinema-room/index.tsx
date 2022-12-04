// Modules
import Web3 from 'web3';
import { useState, createContext, useEffect, useContext } from 'react';
import { Stack, Button, Grid, CircularProgress } from '@mui/material';

// Components
import SeatsRoom from './seats-room';
import LetterColumns from './letter-columns';
import Header from '../../components/header';
import ColorsRow from '../../components/colors-row';

// Context Containers
import UiContextContainer, { UiContext } from '../../contexts/ui-context';
import DialogsContextContainer, { DialogsContext } from '../../contexts/dialogs-context';

// Dialogs 
import MessageDialog from '../../dialogs/message-dialog';
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
import { CinemaRoomScreenContextPayload, SeatData } from './types';


export const CinemaRoomScreenContext = createContext({} as CinemaRoomScreenContextPayload);

export default function CinemaRoomScreen () {

  const [ selectedSeat, setSelectedSeat ] = useState<SeatData | null>(null);
  const [ contractInstance, setContractInstance ] = useState<any>(null);
  const [ account, setAccount ] = useState<null | string>(null);
  const [ seats, setSeats ] = useState<SeatData[]>([]);

  const payload:CinemaRoomScreenContextPayload = {
    isEthereumLoaded:true,
    selectedSeat,
    setSelectedSeat,
    contractInstance,
    seats,
    setSeats,
    account
  }

  const { 
    toggleIsLoadingSeats, 
    isLoadingSeats 
  } = useContext(UiContext);

  async function getContractInstance () {
    // @ts-ignore
    const eth = window.ethereum;
    eth.request({ method:'eth_requestAccounts' });
    const web3 = new Web3(eth);
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
    const res = await fetch("public/SeatContract.json");
    const seatContractJson = await res.json();
    const deployedNetwork = seatContractJson.networks[5777]
    const abi = seatContractJson.abi;
    const instance = new web3.eth.Contract(abi, deployedNetwork && deployedNetwork.address);
    getSeats(instance);
  }

  async function getSeats (instance:any) {
    var promiseArray:any[] = [];
    for (let i = 0; i < 24; i++) {
      const seatPromise = instance.methods.getSeat(i).call();
      promiseArray.push(seatPromise)
    }
    const response = await Promise.all(promiseArray);
    const parsedSeats:SeatData[] = response.map(({ row, inUse, id, column }) => ({ 
      row:Number(row), 
      column:String(column),
      id:Number(id), 
      inUse:Boolean(inUse), 
    }));
    setSeats(parsedSeats);
    setContractInstance(instance);
    toggleIsLoadingSeats()
  }

  useEffect(() => {
    getContractInstance();
  }, []);

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

  function InformationContainer () {
    return (
      <Stack rowGap={2}>
        <LetterColumns/>
        <SeatsRoom/>
      </Stack>
    )
  }

  return (
    <UiContextContainer>
      <DialogsContextContainer>
        <CinemaRoomScreenContext.Provider value={payload}>
          <Stack sx={CinemaScreenStyle.MainContainer}>
            <Header/>
            <Stack sx={CinemaScreenStyle.MainPaddingContainer}>
              <OptionContainer/>
              { isLoadingSeats ? <CircularProgress sx={{ color:'white' }} /> : <InformationContainer/>}
              <ColorsRow/>
            </Stack>
          </Stack>
          <SellTicketsDialog/>
          <GetTicketDialog/>
          <ShowTicketSeatDialog/>
          <RemoveTicketSeatDialog/>
          <CleanRoomDialog/>
          <MessageDialog/>
        </CinemaRoomScreenContext.Provider>
      
      </DialogsContextContainer>
    </UiContextContainer>
  )
}



