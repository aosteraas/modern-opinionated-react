import React, { useState, FormEvent } from 'react';
import { validation } from './validation';

const Registration: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState<undefined | boolean>(undefined);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <input name="name" value={name} onChange={e => setName(e.currentTarget.value)} />
      <input
        name="email"
        value={email}
        onChange={e => {
          const valid = validation.email(e.currentTarget.value);
          setEmail(e.currentTarget.value);
          setValid(valid);
        }}
      />
    </form>
  );
};

export default Registration;
