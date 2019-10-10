import React from 'react';

export const Table: React.FC = props => {
  return (
    <table {...props}>
      <thead>
        <tr>
          <th>Header</th>
        </tr>
      </thead>
      {props.children}
    </table>
  );
};

export default Table;
