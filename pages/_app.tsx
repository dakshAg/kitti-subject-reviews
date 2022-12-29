import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Roboto } from '@next/font/google'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <main className={roboto.className}>
    <Component {...pageProps} />
    </main>
    
  </ThemeProvider>
}
