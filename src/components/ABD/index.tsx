import React from 'react';

interface Nested {
  anotherOne: string;
}
interface Props {
  msg: string;
  data: string[];
  nest: Nested;
}

const ABD: React.FC<Props> = ({ msg, data, nest }) => {
  const { anotherOne } = nest;
  return (
    <div>
      <p>
        {msg} - {anotherOne}
      </p>
      {data.map((d, idx) => (
        <span key={idx}>{d}</span>
      ))}
    </div>
  );
};

class NoDesctruct extends React.Component<Props> {
  render() {
    return (
      <div>
        <p>
          {this.props.msg} - {this.props.nest.anotherOne}
        </p>
        {this.props.data.map((d, idx) => (
          <span key={idx}>{d}</span>
        ))}
      </div>
    );
  }
}
