import { useState } from 'react';
import { validation } from './validation';

export function useRegistration(): IUseRegistration {
  const [name, setName] = useState('');
  const [email, _setEmail] = useState('');
  const [valid, setValid] = useState<IsValid>(undefined);

  const setEmail = (value: string) => {
    const valid = validation.email(value);
    _setEmail(value);
    setValid(valid);
  };

  return { name, email, setName, valid, setEmail };
}

interface IUseRegistration {
  name: string;
  email: string;
  valid: IsValid;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
}

type IsValid = undefined | boolean;
