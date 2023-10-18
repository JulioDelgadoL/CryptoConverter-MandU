import React from 'react';
import { AppProps } from 'next/app';
import '@mantine/core/styles.css';
import { UserContextProvider } from '../context/context';
import { MantineProvider, createTheme } from '@mantine/core';
import '../styles/globals.css';

const theme = createTheme({});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <MantineProvider theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </UserContextProvider>
  );
}

export default MyApp;
