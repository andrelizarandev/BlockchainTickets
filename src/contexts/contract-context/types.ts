export type ContractContextPayload = {
  contractInstance:any;
  setContractInstance: React.Dispatch<any>
  account:string | null;
  setAccount: React.Dispatch<React.SetStateAction<string | null>>
}