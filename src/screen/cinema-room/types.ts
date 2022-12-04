export type SeatData = {
  row:number;
  column:string;
  id:number;
  inUse:boolean;
}

export type CinemaRoomScreenContextPayload = {
  isEthereumLoaded:boolean;
  selectedSeat: SeatData | null;
  setSelectedSeat: React.Dispatch<React.SetStateAction<SeatData | null>>
  contractInstance:any;
  seats:SeatData[];
  setSeats:React.Dispatch<React.SetStateAction<SeatData[]>>;
  account:string | null;
}

export type MessageDialogPayload = {
  message:string;
  title:string;
}

export type DialogOptions = 'add-ticket' | 'get-ticket' | 'show-ticket-seat' | 'remove-ticket' | 'clean-room' | 'message' | null; 