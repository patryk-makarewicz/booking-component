import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    background-color: white;
    color: black;
    margin: 0;
    padding: 0;
  }

  :root {
    --blue: #1BA7E0;
    --red: #FF6866;
  }
`;

export default GlobalStyle;
