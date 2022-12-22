import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../components/navigation';
import Social from '../components/social';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {/* <Navigation /> */}
      {/* <Social /> */}
    </>
    
  )
    
}
