import React from 'react';
import styled from 'styled-components';
export const Layout = ({ children }) => (
  <div
    style={{
      width: '100vw',
      height: '100vw',
      backgroundColor: '#130a3e'
    }}
  >
    <TopLeft />
    {children}
  </div>
);

function TopLeft() {
  const style = {
    position: `fixed`,
    top: 0,
    left: 0
  };
  return (
    <div>
      <BlueCircle />
      <OrangeCircle />
      <DottedTurquoise />
    </div>
  );
}
const BlueCircle = styled.div`
  border: 5px solid #3b8ec8;
  border-radius: 50%;
  width: 46px;
  height: 46px;
  position: fixed;
  top: 136px;
  left: 20px;
`;
// og 720 / 406
const OrangeCircle = styled.div`
  border: 5px solid #f4a83d;
  background: #f4a83d;
  border-radius: 50%;
  width: 24px;
  height: 24px;
`;
const DottedTurquoise = styled.div`
  border: 5px dotted #55b9c8;
  position: fixed;
  top: 0;
  left: 0;
  width: 152px;
  height: 78px;
  transform: skewX(45deg) rotate(275deg);
`;
