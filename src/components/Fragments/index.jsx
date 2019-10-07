import React, {Fragment} from 'react';

const AngryReact = () => {
  return (
      <p>Some kind of content</p>
      <p>Another kind of content</p>
  );
}

const NoFragments = () => {
  return (
    <div>
      <p>Some kind of content</p>
      <p>Another kind of content</p>
    </div>
  );
};

const Fragments = () => {
  return (
    <React.Fragment>
      <p>Some kind of content</p>
      <p>Another kind of content</p>
    </React.Fragment>
  );
};
