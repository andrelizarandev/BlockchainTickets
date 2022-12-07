export type SeatData = {
  row:string;
  column:string;
  id:string;
  idTicket:string;
}

export type SeatsContextPayload = {
  seats:SeatData[];
  setSeats:React.Dispatch<React.SetStateAction<SeatData[]>>;
  selectedSeat: SeatData | null;
  setSelectedSeat: React.Dispatch<React.SetStateAction<SeatData | null>>
}