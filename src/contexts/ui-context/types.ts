export type UiContextPayload = {
  message:MessageDialogPayload | null
  setMessage:React.Dispatch<React.SetStateAction<MessageDialogPayload | null>>;
  isLoadingSeats:boolean;
  isLoadingAction:boolean;
  toggleIsLoadingSeats ():void
  toggleIsLoadingAction (value:boolean):void 
}

export type MessageDialogPayload = {
  message:string;
  title:string;
}