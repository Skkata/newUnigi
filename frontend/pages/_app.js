import Head from 'next/head';
import { Provider } from 'react-redux';
import Layout from '../components/Layout'
import dynamic from 'next/dynamic';
import { store } from '../redux/store';
import '../styles/globals.sass'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={ store }>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false
})
