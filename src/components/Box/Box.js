import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import { incAdults } from '../../redux/GuestNumber/actions';

import styles from './Box.module.scss';

import TangleImage from '../../assets/tangle.png';
import ButtonArrow from '../Buttons/Arrow';
import ButtonAddRoom from '../Buttons/AddRoom';
import ButtonReady from '../Buttons/Ready';
// import ButtonClose from '../Buttons/Close';
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
  const { addAdults, adultsNumber } = props;

  return (
    <>
      <Tangle src={TangleImage} alt="Tangle" />
      <div className={styles.box}>
        <header className={styles.box__header}>
          <p className={styles.box__room}>Room 1</p>
          {/* {addRoom && <ButtonClose />} */}
        </header>
        <p className={styles.box__details}>
          Adults <Span>(18-64 years old)</Span>
        </p>
        <div className={styles.box__buttons}>
          {adultsNumber === 0 ? <ButtonStop /> : <ButtonArrow />}
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
          <ButtonStop />

          <p className={styles.box__number}>T</p>

          <ButtonArrow secondary />
        </div>
        {/* {addRoom && (
          <>
            <p className={styles.box__line} />
            <header className={styles.box__header}>
              <p className={styles.box__room}>Room 2</p>
              <ButtonClose onPress={handleAddRoom} />
            </header>
            <p className={styles.box__details}>
              Adults <Span>(18-64 years old)</Span>
            </p>
            <div className={styles.box__buttons}>
              {adultsNumber === 0 ? (
                <ButtonStop />
              ) : (
                <ButtonArrow  />
              )}
              <p className={styles.box__number}>{adultsNumber}</p>
              {adultsNumber === 4 ? (
                <ButtonStop secondary />
              ) : (
                <ButtonArrow secondary  />
              )}
            </div>
            <p className={styles.box__details}>
              Children <Span>(2-12 years old)</Span>
            </p>
            <div className={styles.box__buttons}>
              {childrenNumber === 0 ? (
                <ButtonStop />
              ) : (
                <ButtonArrow  />
              )}
              <p className={styles.box__number}>{childrenNumber}</p>
              {childrenNumber === 9 ? (
                <ButtonStop secondary />
              ) : (
                <ButtonArrow secondary  />
              )}
            </div>
            <p className={styles.box__line} />
          </>
        )} */}
        {/* {!addRoom && <ButtonAddRoom >Add room</ButtonAddRoom>} */}
        <ButtonAddRoom>Add room</ButtonAddRoom>
        <ButtonReady>Ready</ButtonReady>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addAdults: () => dispatch(incAdults()),
});

const mapStateToProps = (state) => ({
  adultsNumber: state.counterGuest.adults,
});

export default connect(mapStateToProps, mapDispatchToProps)(Box);
