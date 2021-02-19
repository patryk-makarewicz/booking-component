import React from 'react';
import { connect } from 'react-redux';

import { toggleShowBox } from 'redux/Actions/ui-actions';

import styles from './Room.module.scss';
import BedIcon from '../../assets/bed.svg';
import PersonIcon from '../../assets/person.svg';
import ButtonArrowNoBorder from '../Buttons/ArrowNoBorder';
import Box from '../Box/Box';

const Rooms = (props) => {
  const { openBox, showBox } = props;

  return (
    <>
      <div className={styles.room}>
        <div className={styles.room__bed}>
          <img className={styles.room__icon} src={BedIcon} alt="Bed icon" />
          <p className={styles.room__number}>0</p>
        </div>
        <div className={styles.room__person}>
          <img className={styles.room__icon} src={PersonIcon} alt="Person icon" />
          <p className={styles.room__number}>0</p>
          <ButtonArrowNoBorder onPress={() => openBox()} />
        </div>
      </div>
      {showBox && <Box />}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  openBox: () => dispatch(toggleShowBox()),
});

const mapStateToProps = (state) => ({
  showBox: state.UI.showBox,
});

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
