export type SeatData = {
  row:number;
  column:string;
  id:number;
}

export type CinemaRoomScreenContextPayload = {
  isEthereumLoaded:boolean;
  whichDialogIsOpen: DialogOptions;
  openAddTicketDialog (): void;
  openShowTicketSeatDialog (): void;
  openCleanRoomDialog (): void;
  openRemoveTicketSeatDialog (): void;
  closeAnyDialog (): void;
  selectedSeat: SeatData | null;
  setSelectedSeat: React.Dispatch<React.SetStateAction<SeatData | null>>
  closeAnyDialogAndCleanSelectedSeat (): void;
  contractInstance:any;
}

export type DialogOptions = 'add-ticket' | 'get-ticket' | 'show-ticket-seat' | 'remove-ticket' | 'clean-room' | null; 