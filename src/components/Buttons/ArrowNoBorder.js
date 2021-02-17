import React from 'react';
import styled from 'styled-components';

import DownArrowIcon from '../../assets/arrowUp.svg';

const Button = styled.button`
  outline-style: none;
  background: #ffffff;
  border: none;
  background-color: white;
  margin-left: 85px;
  width: 22px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 1;
  }
`;

const Arrow = styled.img`
  transform: rotate(180deg);
`;

const ButtonArrowNoBorder = () => (
  <Button type="button">
    <Arrow src={DownArrowIcon} alt="Down arrow icon" />
  </Button>
);

export default ButtonArrowNoBorder;
