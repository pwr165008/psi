import React from 'react';
import Container from '@mui/material/Container';
import Navbar from '../../shared/navbar/Navbar';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const Layout = ({ children }) => {
  const darkTheme = createTheme({ palette: { mode: 'dark' } });
  // const lightTheme = createTheme({ palette: { mode: 'light' } });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Container>
        {children}
      </Container>
    </ThemeProvider>
  );
}

export default Layout;