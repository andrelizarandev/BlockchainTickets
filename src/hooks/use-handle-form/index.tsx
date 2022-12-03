// Modules
import { useState } from 'react';

// Types
import { OnChangeEvent } from './types';

export default function useHandleForm (initialState:any) {
  
  const [form, setForm] = useState(initialState);

  function handleForm (e:OnChangeEvent) {
    const { name, value } = e.target;
    setForm({ ...form, [name]:value });
  }

  return {
    form,
    setForm,
    handleForm
  }

}
