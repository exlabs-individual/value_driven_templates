import React from 'react';
import NextApp from 'next/app';
import Head from 'next/head';
import { LayoutProvider } from '../layout/layout.provider';
import { MobileMenuStateProvider } from '../providers/mobile-menu.provider';

export default class App extends NextApp {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Exlabs | Value Driven Engineering</title>
        </Head>
        <MobileMenuStateProvider>
          <LayoutProvider>
            <Component {...pageProps} />
          </LayoutProvider>
        </MobileMenuStateProvider>
      </>
    );
  }
}
