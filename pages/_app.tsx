import type { AppProps } from 'next/app';
import Router from 'next/router';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Layout from '../components/layout/layout';
import '../styles/globals.scss';
import { useState, useEffect } from 'react';
import Spinner from '../components/ui/spinner';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);

  function routeChangeStart() {
    Router.events.on('routeChangeStart', () => {
      setIsLoading(true);
    });
  }

  function routeChangeComplete() {
    Router.events.on('routeChangeComplete', () => {
      setIsLoading(false);
    });
  }

  useEffect(() => {
    routeChangeStart();
    routeChangeComplete();
  });

  return (
    <Layout>
      {isLoading && <Spinner />}
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
