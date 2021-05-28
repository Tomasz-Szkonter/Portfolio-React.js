import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme/MainTheme';
import GlobalStyle from './theme/GlobalStyle';
import TopBar from './components/topbar/TopBar';
import Sections from './views/Sections';

const Wrapper = styled.div`
  height: 100vh;
`;

const App = () => (
  <Wrapper>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TopBar />
      <Sections />
    </ThemeProvider>
  </Wrapper>
);

export default App;
