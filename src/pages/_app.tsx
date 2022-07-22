import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import colors from '@layout/colors'
import GlobalStyle from '@components/globalstyles'

const theme: DefaultTheme = colors;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
