/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import Rooms from '../../components/Rooms/Rooms';
import Form from '../../components/Form/index';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  @media screen and (min-width: 580px) {
    flex-direction: row;
    align-items: flex-start;
    margin-top: 100px;
  }
`;

const MarginButton = styled.div`
  margin-top: 25px;
  margin-left: 0;

  @media screen and (min-width: 580px) {
    margin-top: 0;
    margin-left: 25px;
  }
`;

const StartView = () => (
  <Wrapper>
    <Rooms />
    <MarginButton>
      <Form />
    </MarginButton>
  </Wrapper>
);

export default StartView;
