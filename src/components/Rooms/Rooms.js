import React from 'react';
import { connect } from 'react-redux';

import { toggleShowBox } from 'redux/Actions/ui-actions';

import styles from './Room.module.scss';
import BedIcon from '../../assets/bed.svg';
import PersonIcon from '../../assets/person.svg';
import ButtonArrowNoBorder from '../Buttons/ArrowNoBorder';
import Box from '../Box/Box';
import BoxFailed from '../Box/BoxFailed';

const Rooms = (props) => {
  const {
    openBox,
    showBox,
    adultsNumber,
    childrenNumber,
    adultsTwoNumber,
    childrenTwoNumber,
  } = props;

  const sum = adultsNumber + childrenNumber + adultsTwoNumber + childrenTwoNumber;

  const validationRoomOne = adultsNumber === 0 && childrenNumber >= 1;
  const validationRoomTwo = adultsTwoNumber === 0 && childrenTwoNumber >= 1;

  return (
    <div className={styles.wrapper}>
      <div className={styles.room}>
        <div className={styles.room__bed}>
          <img className={styles.room__icon} src={BedIcon} alt="Bed icon" />
          {adultsTwoNumber >= 1 ? (
            <p className={styles.room__number}>2</p>
          ) : (
            <p className={styles.room__number}> {adultsNumber >= 1 ? 1 : 0}</p>
          )}
        </div>
        <div className={styles.room__person}>
          <img className={styles.room__icon} src={PersonIcon} alt="Person icon" />
          <p className={styles.room__number}>{sum}</p>
          <ButtonArrowNoBorder onPress={() => openBox()} showBox={showBox} />
        </div>
      </div>
      {validationRoomOne === true ? <BoxFailed /> : null}
      {validationRoomTwo === true ? <BoxFailed /> : null}
      {showBox && <Box />}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  openBox: () => dispatch(toggleShowBox()),
});

const mapStateToProps = (state) => ({
  showBox: state.UI.showBox,
  adultsNumber: state.roomOne.adults,
  childrenNumber: state.roomOne.children,
  adultsTwoNumber: state.roomTwo.adultsTwo,
  childrenTwoNumber: state.roomTwo.childrenTwo,
});

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
