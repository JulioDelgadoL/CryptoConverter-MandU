// pages/_app.tsx

import React from 'react';
import { AppProps } from 'next/app';
import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import '../styles/globals.css';

const theme = createTheme({});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
