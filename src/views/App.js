import React from 'react';

import GlobalStyle from 'theme/GlobalStyle';

import './App.scss';
import ButtonSubmit from '../components/Buttons/Submit';
import ButtonReady from '../components/Buttons/Ready';
import ButtonArrow from '../components/Buttons/Arrow';
import ButtonClose from '../components/Buttons/Close';
import ButtonStop from '../components/Buttons/Stop';

const App = () => (
  <>
    <GlobalStyle />
    <div className="app">
      <header className="app__header">Booking app</header>
      <ButtonSubmit>Submit</ButtonSubmit>
      <ButtonReady>Ready</ButtonReady>
      <ButtonArrow />
      <ButtonArrow secondary />
      <ButtonClose />
      <ButtonStop />
      <ButtonStop secondary />
    </div>
  </>
);

export default App;
