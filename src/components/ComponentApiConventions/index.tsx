import React, { useState, ChangeEvent, FormEvent } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <SimpleForm handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};
//
const SimpleForm: React.FC<GoodProps> = ({ handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input onChange={handleChange} type="text" name="name" />
    </form>
  );
};
//
interface GoodProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  // onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  // onChange: () => void;
}
//
interface BadProps {
  keyboardCallback: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formSubmission: (e: React.FormEvent) => void;
}
