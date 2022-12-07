export type DialogsContextPayload = {
  whichDialogIsOpen: DialogOptions;
  openMessageDialog (): void;
  openGetTicketDialog (): void;
  openCleanRoomDialog (): void;
  openAddTicketDialog (): void;
  openShowTicketSeatDialog (): void;
  openRemoveTicketSeatDialog (): void;
  openNoEthereumDialog (): void;
  openSignInDialog (): void;
  closeAnyDialog (): void;
}

export type DialogOptions = 'add-ticket' | 'get-ticket' | 'show-ticket-seat' | 'remove-ticket' | 'clean-room' | 'message' | 'no-ethereum' | 'sign-in' |null; 