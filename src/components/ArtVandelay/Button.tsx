import React from 'react';

interface Props {
  disabled: boolean;
  text?: string;
  type: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<Props> = ({ disabled, type, text }) => {
  return (
    <button type={type} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
