// Modules
import Web3 from 'web3';
import { useContext, useEffect } from 'react';

// Contexts
import { ContractContext } from '../../contexts/contract-context';

// Hooks
import useHandleSeats from '../use-handle-seats';

// Types
import { DialogsContext } from '../../contexts/dialogs-context';

export default function useHandleContract () {

  const { setAccount, setContractInstance, contractInstance } = useContext(ContractContext);
  const { openNoEthereumDialog } = useContext(DialogsContext);

  const { getSeats } = useHandleSeats();

  useEffect(() => {
    getContractInstance();
  }, []);

  useEffect(() => {
    if (contractInstance != null) getSeats();
  }, [contractInstance]);

  async function getContractInstance () {
    // @ts-ignore
    const eth = window.ethereum;
    if (!eth) { openNoEthereumDialog(); return; }
    eth.request({ method:'eth_requestAccounts' });
    const web3 = new Web3(eth);
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
    const res = await fetch("public/SeatContract.json");
    const seatContractJson = await res.json();
    const deployedNetwork = seatContractJson.networks[5777];
    const abi = seatContractJson.abi;
    const instance = new web3.eth.Contract(abi, deployedNetwork && deployedNetwork.address);
    setContractInstance(instance);
  }

  return {
    getContractInstance
  }
}
