import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'
import '../styles/index.css'
import fr from "../lang/fr.json"
import en from "../lang/en.json"

const messages = {
  fr,
  en
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter()

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} />
    </IntlProvider>
  )}
