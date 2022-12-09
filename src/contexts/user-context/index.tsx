// Modules
import { createContext, useState } from 'react';

// Types
import { UserContextPayload, UserData, UserTicket } from './types';

export const UserContext = createContext({} as UserContextPayload);

export default function UserContextContainer ({ children }:any) {

  const [ userData, setUserData ] = useState<UserData | null>(null);
  const [ isLoadingSignIn, setIsLoadingSignIn ] = useState(false);
  const [ userTickets, setUserTickets ] = useState<UserTicket[]>([]);

  const payload:UserContextPayload = {
    userData,
    setUserData,
    isLoadingSignIn,
    setIsLoadingSignIn,
    userTickets, 
    setUserTickets
  }

  return (
    <UserContext.Provider value={payload}>
      {children}
    </UserContext.Provider>
  )
}
