import React from 'react';
import styled from 'styled-components';

import ArrowDownGray from '../../assets/arrowDownGray.svg';
import ArrowUpGray from '../../assets/arrowUpGray.svg';

const Button = styled.button`
  outline-style: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #e6eaed;
  border: 0.5px solid rgba(187, 197, 202, 0.6);
  box-sizing: border-box;
  box-shadow: 0px 1.76139px 4.69705px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 1;
  }
`;

const Arrow = styled.img`
  color: #bbc5ca;
  width: 17px;
  height: 10px;
`;

const ButtonStop = ({ secondary }) => (
  <Button type="button">
    {secondary === true ? (
      <Arrow src={ArrowUpGray} alt="Arrow up" />
    ) : (
      <Arrow src={ArrowDownGray} alt="Arrow down" />
    )}
  </Button>
);

export default ButtonStop;
