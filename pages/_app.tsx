import { FC } from 'react';
import { AppProps } from 'next/app';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from './emotion';
import theme from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
const clientSideEmotionCache = createEmotionCache();

type MuiAppProps = AppProps & {
  emotionCache?: ReturnType<typeof createEmotionCache>;
};
const App: FC<AppProps> = (props: MuiAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
