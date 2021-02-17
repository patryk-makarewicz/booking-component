import React from 'react';

import styled from 'styled-components';
import styles from './Box.module.scss';

import TangleImage from '../../assets/tangle.png';
import ButtonArrow from '../Buttons/Arrow';
import ButtonAddRoom from '../Buttons/AddRoom';
import ButtonReady from '../Buttons/Ready';
import ButtonClose from '../Buttons/Close';

const Tangle = styled.img`
  position: relative;
  left: 230px;
  top: 4px;
`;

const Span = styled.span`
  font-weight: 400;
`;

const Box = () => (
  <>
    <Tangle src={TangleImage} alt="Tangle" />
    <div className={styles.box}>
      <header className={styles.box__header}>
        <p className={styles.box__room}>Room 1</p>
        <ButtonClose />
      </header>
      <p className={styles.box__details}>
        Adults <Span>(18-64 years old)</Span>
      </p>
      <div className={styles.box__buttons}>
        <ButtonArrow />
        <p className={styles.box__number}>1</p>
        <ButtonArrow secondary />
      </div>
      <p className={styles.box__details}>
        Children <Span>(2-12 years old)</Span>
      </p>
      <div className={styles.box__buttons}>
        <ButtonArrow />
        <p className={styles.box__number}>1</p>
        <ButtonArrow secondary />
      </div>
      <ButtonAddRoom>Add room</ButtonAddRoom>
      <ButtonReady>Ready</ButtonReady>
    </div>
  </>
);

export default Box;
