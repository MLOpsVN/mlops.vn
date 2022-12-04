import '../styles/globals.css';
import Layout from '@/core/layout';

function MyApp({ Component, pageProps }) {
  console.log(123);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
