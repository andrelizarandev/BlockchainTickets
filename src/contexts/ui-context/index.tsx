// Modules
import { createContext, useState } from 'react';
import { MessageDialogPayload, UiContextPayload } from './types';

export const UiContext = createContext({} as UiContextPayload);

export default function UiContextContainer ({ children }:any) {
  
  const [ message, setMessage ] = useState<MessageDialogPayload | null>(null);
  const [ isLoadingSeats, setIsLoadingSeats ] = useState(true);
  const [ isLoadingAction, setIsLoadingAction ] = useState(false);

  const toggleIsLoadingSeats = () => setIsLoadingSeats(!isLoadingSeats);
  const toggleIsLoadingAction = (value:boolean) => setIsLoadingAction(value);

  const payload:UiContextPayload = {
    message,
    setMessage,
    isLoadingSeats,
    isLoadingAction,
    toggleIsLoadingSeats,
    toggleIsLoadingAction
  }

  return (
    <UiContext.Provider value={payload}>
      {children}
    </UiContext.Provider>
  )

}
