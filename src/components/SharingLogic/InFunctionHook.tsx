import React, { FormEvent } from 'react';
import { useRegistration } from './useRegistration';

const Registration: React.FC = () => {
  const { name, setName, email, valid, setEmail } = useRegistration();
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <input name="name" value={name} onChange={e => setName(e.currentTarget.value)} />
      <input name="email" value={email} onChange={e => setEmail(e.currentTarget.value)} />
    </form>
  );
};

export default Registration;
