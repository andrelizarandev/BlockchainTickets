// Modules
import Web3 from 'web3';
import { useContext, useEffect } from 'react';

// Contexts
import { ContractContext } from '../../contexts/contract-context';

// Types
import { UiContext } from '../../contexts/ui-context';
import { SeatsContext } from '../../contexts/seats-context';
import { SeatData } from '../../contexts/seats-context/types';

export default function useHandleContract () {

  const { setAccount, setContractInstance } = useContext(ContractContext);
  const { setSeats } = useContext(SeatsContext);
  const { toggleIsLoadingSeats } = useContext(UiContext);

  useEffect(() => {
    getContractInstance();
  }, []);

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
    
  }

  return {
    getSeats,
    getContractInstance
  }
}
