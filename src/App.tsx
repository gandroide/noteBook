import React, { FC } from 'react';
import { Container } from './styles/Container.styles';
import GlobalStyles from './styles';
import { defaultTheme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Info } from './components/Info';
import { NavBar } from './components/NavBar';

export const App: FC = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <NavBar />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/info" element={<Info />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};
