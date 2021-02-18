import React from 'react';
import styled from 'styled-components';

import LoupeImage from '../../assets/loupe.svg';
import OkImage from '../../assets/ok.svg';

const Button = styled.button`
  outline-style: none;
  display: flex;
  align-items: center;
  width: 226px;
  height: 46px;
  background-color: var(--red);
  border: 1px solid #dd4747;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 104, 102, 0.8);
    border: 1px solid rgba(221, 71, 71, 0.8);
  }

  &:active {
    background: var(--red);
    border: 1px solid #dd4747;
  }
`;

const Icon = styled.img`
  position: relative;
  width: 22px;
  height: 22px;
  margin-left: 19px;
`;

const Children = styled.p`
  position: absolute;
  text-align: center;
  color: #ffffff;
  width: 224px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
`;

const ButtonSubmit = ({ children, secondary, onPress }) => (
  <Button type="submit" onClick={onPress}>
    {secondary === true ? <Icon src={OkImage} alt="Ok" /> : <Icon src={LoupeImage} alt="Loupe" />}

    <Children>{children}</Children>
  </Button>
);

export default ButtonSubmit;
