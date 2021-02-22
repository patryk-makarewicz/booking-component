/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Rooms from '../../components/Rooms/Rooms';
import ButtonSubmit from '../../components/Buttons/Submit';

const Wrapper = styled.div`
  display: flex;
`;

const StartView = (props) => {
  const { adultsNumber, childrenNumber, adultsTwoNumber, childrenTwoNumber } = props;

  const validationRoomOne = adultsNumber === 0 && childrenNumber >= 1;
  const validationRoomTwo = adultsTwoNumber === 0 && childrenTwoNumber >= 1;

  return (
    <Wrapper>
      <Rooms />
      <ButtonSubmit>Submit</ButtonSubmit>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  adultsNumber: state.roomOne.adults,
  childrenNumber: state.roomOne.children,
  adultsTwoNumber: state.roomTwo.adultsTwo,
  childrenTwoNumber: state.roomTwo.childrenTwo,
});

export default connect(mapStateToProps)(StartView);
