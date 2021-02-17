import React from 'react';
import styled from 'styled-components';

import TangleImage from '../../assets/tangle.png';
import ButtonArrow from '../Buttons/Arrow';
import ButtonAddRoom from '../Buttons/AddRoom';
import ButtonReady from '../Buttons/Ready';
import ButtonClose from '../Buttons/Close';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Room = styled.p`
  width: 60px;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: var(--red);
  margin-bottom: 16px;
`;

const RoomButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 125px;
  height: 33px;
  margin-bottom: 11px;
`;

const RoomDetails = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #323232;
  margin-bottom: 5px;
`;
const RoomNumber = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #323232;
`;

const Span = styled.span`
  font-weight: 400;
`;

const Tangle = styled.img`
  position: relative;
  left: 230px;
  top: 4px;
`;

const Wrapper = styled.div`
  width: 303px;
  height: 315px;
  background: #ffffff;
  box-shadow: 0px 6px 12px rgba(34, 68, 90, 0.25);
  border-radius: 2px;
  padding: 25px;
`;

const Box = () => (
  <>
    <Tangle src={TangleImage} alt="Tangle" />
    <Wrapper>
      <Header>
        <Room>Room 1</Room>
        <ButtonClose />
      </Header>
      <RoomDetails>
        Adults <Span>(18-64 years old)</Span>
      </RoomDetails>
      <RoomButtons>
        <ButtonArrow />
        <RoomNumber>1</RoomNumber>
        <ButtonArrow secondary />
      </RoomButtons>
      <RoomDetails>
        Children <Span>(2-12 years old)</Span>
      </RoomDetails>
      <RoomButtons>
        <ButtonArrow />
        <RoomNumber>1</RoomNumber>
        <ButtonArrow secondary />
      </RoomButtons>
      <ButtonAddRoom>Add room</ButtonAddRoom>
      <ButtonReady>Ready</ButtonReady>
    </Wrapper>
  </>
);

export default Box;
