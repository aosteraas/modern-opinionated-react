import React from 'react';
import { Prism as Highlighter } from 'react-syntax-highlighter';
import { okaidia, atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const DeclaringComponents = () => {
  return (
    <Highlighter style={atomDark} language="jsx">
      {`class AirlineFood extends Component<Props, State> {
  state = { open: false };
  render() {
    return (
      <div>
        {this.props.text}
        <p>What's the deal with airline food?</p>
      </div>
    );
  }
}
`}
    </Highlighter>
  );
};
