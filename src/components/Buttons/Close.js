import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  outline-style: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #ffffff;
  border: 0.5px solid #e6eaed;
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

const LineX = styled.div`
  position: relative;
  left: 7px;
  top: 1px;
  width: 17px;
  height: 2px;
  background-color: var(--red);
  transform: rotate(45deg);
`;

const LineY = styled.div`
  position: relative;
  left: 6px;
  bottom: 1px;
  width: 17px;
  height: 2px;
  background-color: var(--red);
  transform: rotate(-45deg);
`;

const ButtonClose = () => (
  <Button type="button">
    <LineX />
    <LineY />
  </Button>
);

export default ButtonClose;
