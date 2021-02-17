import React from 'react';

import styles from './Room.module.scss';

import BedIcon from '../../assets/bed.svg';
import PersonIcon from '../../assets/person.svg';
import ButtonArrowNoBorder from '../Buttons/ArrowNoBorder';

const Rooms = () => (
  <div className={styles.room}>
    <div className={styles.room__bed}>
      <img className={styles.room__icon} src={BedIcon} alt="Bed icon" />
      <p className={styles.room__number}>0</p>
    </div>
    <div className={styles.room__person}>
      <img className={styles.room__icon} src={PersonIcon} alt="Person icon" />
      <p className={styles.room__number}>0</p>
      <ButtonArrowNoBorder />
    </div>
  </div>
);

export default Rooms;
