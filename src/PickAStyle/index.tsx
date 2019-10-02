import React, { MouseEvent } from 'react';

const MyComponent: React.FC = () => {
  const handleClick = (e: MouseEvent) => {
    // do something
  };
  return (
    <div>
      <p>things</p>
    </div>
  );
};

const _MyComponent: React.FC = () => {
  function handleClick(e: MouseEvent) {
    // do something
  }
  return (
    <div>
      <p>things</p>
    </div>
  );
};

class BadForm extends React.Component {
  componentDidMount() {
    //
  }
  handleClick = () => {
    //
  };
}

export default MyComponent;
