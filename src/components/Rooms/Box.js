import React from 'react';
import styled from 'styled-components';

import TangleImage from '../../assets/tangle.png';

const Wrapper = styled.div`
  width: 303px;
  height: 315px;
  background: #ffffff;
  box-shadow: 0px 6px 12px rgba(34, 68, 90, 0.25);
  border-radius: 2px;
`;

const Tangle = styled.img`
  position: relative;
  left: 230px;
  top: 4px;
`;

const Box = () => (
  <div>
    <Tangle src={TangleImage} alt="Tangle" />

    <Wrapper />
  </div>
);

export default Box;
