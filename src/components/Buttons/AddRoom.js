import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  outline-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80px;
  height: 23px;
  background-color: white;
  border-style: none;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 1;
  }
`;

const Children = styled.p`
  color: #1ba7e0;
  text-decoration-line: underline;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
`;

const ButtonAddRoom = ({ children }) => (
  <Button type="button">
    <Children>{children}</Children>
  </Button>
);

export default ButtonAddRoom;
