export type UserContextPayload = {
  userData:UserData | null;
  setUserData: React.Dispatch<React.SetStateAction<UserData | null>>;
  isLoadingSignIn: boolean;
  setIsLoadingSignIn: React.Dispatch<React.SetStateAction<boolean>>;
  userTickets: UserTicket[];
  setUserTickets: React.Dispatch<React.SetStateAction<UserTicket[]>>;
}

export type UserData = {
  id:string;
  name:string;
  password:string;
  email:string;
}

export type UserTicket = {
  id:string;
  idSeat:string;
  row:string;
  column:string;
}