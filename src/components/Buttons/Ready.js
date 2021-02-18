import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  outline-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 169px;
  height: 46px;
  background: #1ba7e0;
  border: 1px solid #2193c1;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    background: rgba(27, 167, 224, 0.8);
    border: 1px solid rgba(33, 147, 193, 0.8);
  }

  &:active {
    background: #1ba7e0;
    border: 1px solid #2193c1;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.15);
  }
`;

const Children = styled.p`
  color: #ffffff;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
`;

const ButtonReady = ({ children, onPress }) => (
  <Button type="button" onClick={onPress}>
    <Children>{children}</Children>
  </Button>
);

export default ButtonReady;
