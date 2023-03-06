import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react';
import Layout from '../components/layout/layout'
import { valueCart } from '@/logic/shoppingСart/shoppingСart';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
