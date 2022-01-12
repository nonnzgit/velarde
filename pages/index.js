import Head from 'next/head';
import BsNavBar from '../components/sections/BsNavBar';
import Intro from '../components/sections/Intro';
import Servicios from '../components/sections/Servicios';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Grupo10 Montequinto</title>
        <meta
          name="description"
          content="Correduría de seguros Velarde Seguros - Grupo 10 Montequinto"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BsNavBar />
      <Intro />
      <Servicios />
    </div>
  );
}
