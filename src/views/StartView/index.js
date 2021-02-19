import React from 'react';

import Rooms from '../../components/Rooms/Rooms';
import Box from '../../components/Box/Box';
import BoxFailed from '../../components/Box/BoxFailed';

const StartView = () => (
  <>
    <Rooms />
    <Box />
    <BoxFailed />
  </>
);

export default StartView;
