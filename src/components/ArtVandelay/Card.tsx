import React from 'react';

interface Props {
  title: string;
}

export const Card: React.FC<Props> = props => {
  const { title } = props;
  return (
    <article className="card">
      <header className="title">{title}</header>
    </article>
  );
};

export default Card;
