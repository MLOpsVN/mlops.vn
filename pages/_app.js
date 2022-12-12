import '../styles/globals.css';
import Layout from '@/core/layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>MLOpsVN</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
