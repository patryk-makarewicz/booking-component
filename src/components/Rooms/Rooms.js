import React from 'react';
import styled from 'styled-components';

import BedIcon from '../../assets/bed.svg';
import PersonIcon from '../../assets/person.svg';
import DownArrowIcon from '../../assets/arrowUp.svg';

const Wrapper = styled.div`
  display: flex;
  width: 303px;
  height: 46px;
  background: #ffffff;
  border: 1px solid #dde1e3;
  box-shadow: 0px 2px 6px rgba(121, 141, 176, 0.25);
  border-radius: 5px;
`;

const Bed = styled.div`
  display: flex;
  align-items: center;
  width: 96px;
  height: 100%;
  border-right: 1px solid #e6eaed;
`;

const Person = styled.div`
  display: flex;
  align-items: center;
  width: 206px;
  height: 100%;
`;

const Icon = styled.img`
  margin-left: 25px;
`;

const Arrow = styled.img`
  margin-left: 85px;
  transform: rotate(180deg);
`;

const Number = styled.p`
  width: 27px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  margin-left: 9px;
`;

const Rooms = () => (
  <Wrapper>
    <Bed>
      <Icon src={BedIcon} alt="Bed icon" />
      <Number>0</Number>
    </Bed>
    <Person>
      <Icon src={PersonIcon} alt="Person icon" />
      <Number>0</Number>
      <Arrow src={DownArrowIcon} alt="Down arrow icon" />
    </Person>
  </Wrapper>
);

export default Rooms;
