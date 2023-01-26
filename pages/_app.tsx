import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Roboto } from '@next/font/google'
import { SessionProvider } from "next-auth/react"

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <SessionProvider session={session}>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>

  </ThemeProvider>
}
