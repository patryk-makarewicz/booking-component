import React from 'react';

import GlobalStyle from 'theme/GlobalStyle';

import './App.scss';
import ButtonSubmit from '../components/Buttons/Submit';
import ButtonReady from '../components/Buttons/Ready';

const App = () => (
  <>
    <GlobalStyle />
    <div className="app">
      <header className="app__header">Booking app</header>
      <ButtonSubmit>Submit</ButtonSubmit>
      <ButtonReady>Ready</ButtonReady>
    </div>
  </>
);

export default App;
