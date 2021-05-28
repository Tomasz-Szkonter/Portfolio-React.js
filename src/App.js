import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/MainTheme';
import GlobalStyle from './theme/GlobalStyle';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <h1>ELON</h1>
  </ThemeProvider>
);

export default App;
