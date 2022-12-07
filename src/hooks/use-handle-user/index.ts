import React, { useContext } from 'react'
import { ContractContext } from '../../contexts/contract-context';
import { DialogsContext } from '../../contexts/dialogs-context';
import { UiContext } from '../../contexts/ui-context';
import { UserContext } from '../../contexts/user-context';
import { UserData } from '../../contexts/user-context/types';

export default function useHandleUser () {

  const { contractInstance, account } = useContext(ContractContext);
  const { openMessageDialog } = useContext(DialogsContext);
  const { setMessage } = useContext(UiContext);
  const { setUserData } = useContext(UserContext);

  async function signIn (email:string, password:string) {
    const user:UserData = await contractInstance.methods.signIn(email, password).call();
    if (!user.id) setWrongDataMessage();
    else setUserDataFromLogin(user);
  }

  function setUserDataFromLogin (user:UserData) {
    openMessageDialog();
    setUserData(user);
    setMessage({ 
      message:`Sesión iniciada correctamente`, 
      title:`Bienvenido ${user.name}` 
    });
  }

  function setWrongDataMessage () {
    openMessageDialog();
    setMessage({ 
      message:'Error en los datos introducidos', 
      title:'Error Iniciando Sesión' 
    });
  }

  function signOut () {
    setUserData(null)
    openMessageDialog();
    setMessage({ 
      message:'Es necesario inicies sesión para comprar tickets', 
      title:'Sesión cerrada' 
    });
  }

  return {
    signIn,
    signOut
  }

}
