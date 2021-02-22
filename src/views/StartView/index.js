/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import Rooms from '../../components/Rooms/Rooms';
import Form from '../../components/Form/index';

const Wrapper = styled.div`
  display: flex;
`;

const StartView = () => (
  <Wrapper>
    <Rooms />
    <Form />
  </Wrapper>
);

export default StartView;
