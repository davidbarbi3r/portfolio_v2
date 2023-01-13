import { AppProps } from 'next/app'
import '../styles/index.css'
import { AnimatePresence } from 'framer-motion'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence mode='wait'>
      <Component {...pageProps} />
    </AnimatePresence>
  )}
