import React from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

import { CustomThemeProvider } from './hooks/theme';

import GlobalStyle from './styles/global';

function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyle />

      <div className="app">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </CustomThemeProvider>
  );
}

export default App;
