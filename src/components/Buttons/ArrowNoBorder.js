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

const ArrowOpen = styled.img`
  transform: rotate(180deg);
`;

const ArrowClose = styled.img`
  transform: rotate(0deg);
`;

const ButtonArrowNoBorder = ({ onPress, showBox }) => (
  <Button type="button" onClick={onPress}>
    {showBox === true ? (
      <ArrowClose src={DownArrowIcon} alt="Down arrow icon" />
    ) : (
      <ArrowOpen src={DownArrowIcon} alt="Down arrow icon" />
    )}
  </Button>
);

export default ButtonArrowNoBorder;
