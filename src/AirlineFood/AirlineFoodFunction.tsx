import React, { useState } from 'react';
interface Props {
  text: string;
  data: string[];
}
export const AirlineFood: React.FC<Props> = props => {
  const [open, setIsOpen] = useState(false);
  return (
    <div>
      {props.data.map((d, idx) => (
        <p key={idx}>{d}</p>
      ))}
    </div>
  );
};
