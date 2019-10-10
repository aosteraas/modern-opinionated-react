import React from 'react';
import { Button, Card, Table } from '../ArtVandelay';

export const App: React.FC = () => {
  return (
    <>
      <Button disabled={false} type="button" />
      <Card title="My Card" />
      <Table />
    </>
  );
};
