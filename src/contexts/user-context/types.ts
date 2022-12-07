export type UserContextPayload = {
  userData:UserData | null;
  setUserData: React.Dispatch<React.SetStateAction<UserData | null>>;
  isLoadingSignIn: boolean;
  setIsLoadingSignIn: React.Dispatch<React.SetStateAction<boolean>>
}

export type UserData = {
  id:string;
  name:string;
  password:string;
}