import React from 'react';

import GlobalStyle from 'theme/GlobalStyle';

import './App.scss';
import Button from '../components/Buttons/Submit';

const App = () => (
  <>
    <GlobalStyle />
    <div className="app">
      <header className="app__header">Booking app</header>
      <Button>Submit</Button>
    </div>
  </>
);

export default App;
