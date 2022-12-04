export type SeatData = {
  row:number;
  column:string;
  id:number;
  inUse:boolean;
}

export type SeatsContextPayload = {
  seats:SeatData[];
  setSeats:React.Dispatch<React.SetStateAction<SeatData[]>>;
  selectedSeat: SeatData | null;
  setSelectedSeat: React.Dispatch<React.SetStateAction<SeatData | null>>
}