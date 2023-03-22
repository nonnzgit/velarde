import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Velarde Seguros - Grupo 10 Montequinto</title>
        <meta
          name="description"
          content="Correduría de seguros Velarde Seguros - Grupo 10 Montequinto"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
