import React from 'react';
import styled from 'styled-components';

import ArrowDown from '../../assets/arrowDown.svg';
import ArrowUp from '../../assets/arrowUp.svg';

const Button = styled.button`
  outline-style: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #ffffff;
  border: 0.5px solid #e6eaed;
  box-sizing: border-box;
  box-shadow: 0px 1.76139px 4.69705px rgba(0, 0, 0, 0.15);
  color: #ff6866;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 1;
  }
`;

const Arrow = styled.img`
  width: 17px;
  height: 10px;
`;

const ButtonArrow = ({ secondary }) => (
  <Button type="button">
    {secondary === true ? (
      <Arrow src={ArrowUp} alt="Arrow down" />
    ) : (
      <Arrow src={ArrowDown} alt="Arrow down" />
    )}
  </Button>
);

export default ButtonArrow;
