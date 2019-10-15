import React from 'react';

export const Input: React.FC<Props> = ({ type, value, labelText, onChange, required }) => {
  return (
    <input
      type={type}
      aria-label={labelText}
      aria-required="true"
      onChange={e => onChange(e.target.value)}
      value={value}
      name="name"
      required={required}
    />
  );
};
interface Props {
  labelText: string;
  value: string | number;
  type: 'text' | 'email' | 'number';
  onChange: (value: string) => void;
  required: boolean;
}
