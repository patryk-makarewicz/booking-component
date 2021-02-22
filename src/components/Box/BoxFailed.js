import React from 'react';
import styled from 'styled-components';

import TangleImage from '../../assets/tangle.png';
import WarningIcon from '../../assets/warning.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 303px;
  height: 82px;
  background: #ffffff;
  box-shadow: 0px 6px 12px rgba(34, 68, 90, 0.25);
  border-radius: 2px;
`;

const Tangle = styled.img`
  position: relative;
  left: 230px;
  top: 7px;
`;

const Warning = styled.p`
  max-width: 195px;
  height: 40px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: var(--red);
  margin-left: 18px;
`;

const Icon = styled.img`
  margin-left: 26px;
`;

const BoxFailed = () => (
  <>
    <Tangle src={TangleImage} alt="Tangle" />
    <Wrapper>
      <Icon src={WarningIcon} alt="Warning icon" />
      <Warning>Specify the number of people in the room.</Warning>
    </Wrapper>
  </>
);

export default BoxFailed;
