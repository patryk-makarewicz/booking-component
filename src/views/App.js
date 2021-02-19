import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from 'theme/GlobalStyle';
import store from '../redux/store';

import StartView from './StartView';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <StartView />
  </Provider>
);

export default App;
