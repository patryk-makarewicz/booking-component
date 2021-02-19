import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from 'theme/GlobalStyle';
import store from '../redux/store';

import ButtonSubmit from '../components/Buttons/Submit';
import ButtonReady from '../components/Buttons/Ready';
import ButtonArrow from '../components/Buttons/Arrow';
import ButtonClose from '../components/Buttons/Close';
import ButtonStop from '../components/Buttons/Stop';
import Rooms from '../components/Rooms/Rooms';
import Box from '../components/Box/Box';
import BoxFailed from '../components/Box/BoxFailed';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <div>
      <ButtonSubmit>Submit</ButtonSubmit>
      <ButtonSubmit secondary>Submit</ButtonSubmit>
      <ButtonReady>Ready</ButtonReady>
      <ButtonArrow />
      <ButtonArrow secondary />
      <ButtonClose />
      <ButtonStop />
      <ButtonStop secondary />
      <Rooms />
      <Box />
      <BoxFailed />
    </div>
  </Provider>
);

export default App;
