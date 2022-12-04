// Modules
import { createContext, useState } from 'react';

// Types
import { SeatData, SeatsContextPayload } from './types';

export const SeatsContext = createContext({} as SeatsContextPayload);

export default function SeatsContextContainer ({ children }:any) {

  const [ seats, setSeats ] = useState<SeatData[]>([]);
  const [ selectedSeat, setSelectedSeat ] = useState<SeatData | null>(null);

  const payload:SeatsContextPayload = {
    seats,
    setSeats,
    selectedSeat,
    setSelectedSeat,
  }

  return (
    <SeatsContext.Provider value={payload}>
      {children}
    </SeatsContext.Provider>
  )
}
