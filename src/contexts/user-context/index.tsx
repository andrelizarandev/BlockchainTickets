// Modules
import { createContext, useState } from 'react';

// Types
import { UserContextPayload, UserData } from './types';

export const UserContext = createContext({} as UserContextPayload);

export default function UserContextContainer ({ children }:any) {

  const [ userData, setUserData ] = useState<UserData | null>(null);
  const [ isLoadingSignIn, setIsLoadingSignIn ] = useState(false);

  const payload:UserContextPayload = {
    userData,
    setUserData,
    isLoadingSignIn,
    setIsLoadingSignIn
  }

  return (
    <UserContext.Provider value={payload}>
      {children}
    </UserContext.Provider>
  )
}
