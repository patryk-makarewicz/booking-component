import React from 'react';
import styled from 'styled-components';

import TangleImage from '../../assets/tangle.png';
import ButtonArrow from '../Buttons/Arrow';
import ButtonAddRoom from '../Buttons/AddRoom';
import ButtonReady from '../Buttons/Ready';

const Wrapper = styled.div`
  width: 303px;
  height: 315px;
  background: #ffffff;
  box-shadow: 0px 6px 12px rgba(34, 68, 90, 0.25);
  border-radius: 2px;
  padding: 25px;
`;

const Tangle = styled.img`
  position: relative;
  left: 230px;
  top: 4px;
`;

const Room = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #ff6866;
  margin-bottom: 16px;
`;

const Details = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #323232;
  margin-bottom: 5px;
`;
const DetailsNumber = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #323232;
`;

const Span = styled.span`
  font-weight: 400;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 125px;
  height: 33px;
  margin-bottom: 11px;
`;

const Box = () => (
  <>
    <Tangle src={TangleImage} alt="Tangle" />
    <Wrapper>
      <Room>Room 1</Room>
      <Details>
        Adults <Span>(18-64 years old)</Span>
      </Details>
      <Buttons>
        <ButtonArrow />
        <DetailsNumber>1</DetailsNumber>
        <ButtonArrow secondary />
      </Buttons>
      <Details>
        Children <Span>(2-12 years old)</Span>
      </Details>
      <Buttons>
        <ButtonArrow />
        <DetailsNumber>1</DetailsNumber>
        <ButtonArrow secondary />
      </Buttons>
      <ButtonAddRoom>Add room</ButtonAddRoom>
      <ButtonReady>Ready</ButtonReady>
    </Wrapper>
  </>
);

export default Box;
