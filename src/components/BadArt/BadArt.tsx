import React from 'react';
import Button from '../ArtVandelay/Button';
import Card from '../ArtVandelay/Card';
import Table from '../ArtVandelay/Table';

export const App: React.FC = () => {
  return (
    <div>
      <Button disabled={false} type="button" />
      <Card title="My Card" />
      <Table />
    </div>
  );
};
