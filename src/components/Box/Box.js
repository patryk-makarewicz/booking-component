import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import {
  decAdults,
  decChildren,
  incAdults,
  incChildren,
  resetPerson,
} from '../../redux/Actions/roomOne-actions';
import {
  decAdultsTwo,
  decChildrenTwo,
  incAdultsTwo,
  incChildrenTwo,
  resetPersonTwo,
} from '../../redux/Actions/roomTwo-actions';
import { toggleAddRoom, toggleShowBox } from '../../redux/Actions/ui-actions';

import styles from './Box.module.scss';

import TangleImage from '../../assets/tangle.png';
import ButtonArrow from '../Buttons/Arrow';
import ButtonAddRoom from '../Buttons/AddRoom';
import ButtonReady from '../Buttons/Ready';
import ButtonClose from '../Buttons/Close';
import ButtonStop from '../Buttons/Stop';

const Tangle = styled.img`
  position: relative;
  left: 230px;
  top: 4px;
`;

const Span = styled.span`
  font-weight: 400;
`;

const Box = (props) => {
  const {
    addAdults,
    removeAdults,
    addAdultsTwo,
    removeAdultsTwo,
    adultsNumber,
    adultsTwoNumber,
    addChildren,
    removeChildren,
    addChildrenTwo,
    removeChildrenTwo,
    childrenNumber,
    childrenTwoNumber,
    addRoom,
    addRoomOne,
    showNextRoom,
    removePerson,
    removePersonTwo,
    openBox,
  } = props;

  return (
    <>
      <Tangle src={TangleImage} alt="Tangle" />
      <div className={styles.box}>
        <header className={styles.box__header}>
          <p className={styles.box__room}>Room 1</p>
          {!showNextRoom && (
            <ButtonClose
              onPress={() => {
                removePerson();
                addRoomOne();
              }}
            />
          )}
        </header>
        <p className={styles.box__details}>
          Adults <Span>(18-64 years old)</Span>
        </p>
        <div className={styles.box__buttons}>
          {adultsNumber === 0 ? <ButtonStop /> : <ButtonArrow onPress={() => removeAdults()} />}
          <p className={styles.box__number}>{adultsNumber}</p>
          {adultsNumber === 4 ? (
            <ButtonStop secondary />
          ) : (
            <ButtonArrow secondary onPress={() => addAdults()} />
          )}
        </div>
        <p className={styles.box__details}>
          Children <Span>(2-12 years old)</Span>
        </p>
        <div className={styles.box__buttons}>
          {childrenNumber === 0 ? <ButtonStop /> : <ButtonArrow onPress={() => removeChildren()} />}
          <p className={styles.box__number}>{childrenNumber}</p>
          {childrenNumber === 9 ? (
            <ButtonStop secondary />
          ) : (
            <ButtonArrow secondary onPress={() => addChildren()} />
          )}
        </div>
        {showNextRoom && (
          <>
            <p className={styles.box__line} />
            <header className={styles.box__header}>
              <p className={styles.box__room}>Room 2</p>
              <ButtonClose
                onPress={() => {
                  removePersonTwo();
                  addRoom();
                }}
              />
            </header>
            <p className={styles.box__details}>
              Adults <Span>(18-64 years old)</Span>
            </p>
            <div className={styles.box__buttons}>
              {adultsTwoNumber === 0 ? (
                <ButtonStop />
              ) : (
                <ButtonArrow onPress={() => removeAdultsTwo()} />
              )}
              <p className={styles.box__number}>{adultsTwoNumber}</p>
              {adultsTwoNumber === 4 ? (
                <ButtonStop secondary />
              ) : (
                <ButtonArrow secondary onPress={() => addAdultsTwo()} />
              )}
            </div>
            <p className={styles.box__details}>
              Children <Span>(2-12 years old)</Span>
            </p>
            <div className={styles.box__buttons}>
              {childrenTwoNumber === 0 ? (
                <ButtonStop />
              ) : (
                <ButtonArrow onPress={() => removeChildrenTwo()} />
              )}
              <p className={styles.box__number}>{childrenTwoNumber}</p>
              {childrenTwoNumber === 9 ? (
                <ButtonStop secondary />
              ) : (
                <ButtonArrow secondary onPress={() => addChildrenTwo()} />
              )}
            </div>
            <p className={styles.box__line} />
          </>
        )}
        {!showNextRoom && <ButtonAddRoom onPress={() => addRoom()}>Add room</ButtonAddRoom>}
        <ButtonReady onPress={() => openBox()}>Ready</ButtonReady>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addAdults: () => dispatch(incAdults()),
  addChildren: () => dispatch(incChildren()),
  addAdultsTwo: () => dispatch(incAdultsTwo()),
  addChildrenTwo: () => dispatch(incChildrenTwo()),
  removeAdults: () => dispatch(decAdults()),
  removeChildren: () => dispatch(decChildren()),
  removeAdultsTwo: () => dispatch(decAdultsTwo()),
  removeChildrenTwo: () => dispatch(decChildrenTwo()),
  removePerson: () => dispatch(resetPerson()),
  removePersonTwo: () => dispatch(resetPersonTwo()),
  addRoom: () => dispatch(toggleAddRoom()),
  addRoomOne: () => dispatch(toggleShowBox()),
  openBox: () => dispatch(toggleShowBox()),
});

const mapStateToProps = (state) => ({
  adultsNumber: state.roomOne.adults,
  childrenNumber: state.roomOne.children,
  adultsTwoNumber: state.roomTwo.adultsTwo,
  childrenTwoNumber: state.roomTwo.childrenTwo,
  showBox: state.UI.showBox,
  showNextRoom: state.UI.showNextRoom,
});

export default connect(mapStateToProps, mapDispatchToProps)(Box);
