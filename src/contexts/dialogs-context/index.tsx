// Modules
import { createContext, useState } from 'react';

// Types
import { DialogOptions, DialogsContextPayload } from './types';

export const DialogsContext = createContext({} as DialogsContextPayload);

export default function DialogsContextContainer ({ children }:any) {

  const [ whichDialogIsOpen, setWhichDialogIsOpen ] = useState<DialogOptions>(null);

  const openAddTicketDialog = () => setWhichDialogIsOpen('add-ticket');
  const openGetTicketDialog = () => setWhichDialogIsOpen('get-ticket');
  const openShowTicketSeatDialog = () => setWhichDialogIsOpen('show-ticket-seat');
  const openRemoveTicketSeatDialog = () => setWhichDialogIsOpen('remove-ticket');
  const openCleanRoomDialog = () => setWhichDialogIsOpen('clean-room');
  const openMessageDialog = () => { setWhichDialogIsOpen('message');}
  const closeAnyDialog = () => setWhichDialogIsOpen(null);

  const payload:DialogsContextPayload = {
    whichDialogIsOpen,
    openAddTicketDialog,
    openGetTicketDialog,
    openShowTicketSeatDialog,
    openRemoveTicketSeatDialog,
    openCleanRoomDialog,
    openMessageDialog,
    closeAnyDialog
  }

  return (
    <DialogsContext.Provider value={payload}>
      {children}
    </DialogsContext.Provider>
  )

}
