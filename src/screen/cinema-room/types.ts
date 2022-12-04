export type SeatData = {
  row:number;
  column:string;
  id:number;
  inUse:boolean;
}

export type CinemaRoomScreenContextPayload = {
  isEthereumLoaded:boolean;
  whichDialogIsOpen: DialogOptions;
  openAddTicketDialog (): void;
  openShowTicketSeatDialog (): void;
  openCleanRoomDialog (): void;
  openRemoveTicketSeatDialog (): void;
  closeAnyDialog (): void;
  openMessageDialog (): void;
  selectedSeat: SeatData | null;
  setSelectedSeat: React.Dispatch<React.SetStateAction<SeatData | null>>
  closeAnyDialogAndCleanSelectedSeat (): void;
  contractInstance:any;
  seats:SeatData[];
  setSeats:React.Dispatch<React.SetStateAction<SeatData[]>>;
  account:string | null;
  message:MessageDialogPayload | null
  setMessage:React.Dispatch<React.SetStateAction<MessageDialogPayload | null>>;
  isLoadingAction:boolean;
  setIsLoadingAction:React.Dispatch<React.SetStateAction<boolean>>;
}

export type MessageDialogPayload = {
  message:string;
  title:string;
}

export type DialogOptions = 'add-ticket' | 'get-ticket' | 'show-ticket-seat' | 'remove-ticket' | 'clean-room' | 'message' | null; 