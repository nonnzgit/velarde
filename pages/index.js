import Head from 'next/head';
import BsNavBar from '../components/sections/BsNavBar';
import Intro from '../components/sections/Intro';
import Productos from '../components/sections/Productos';
import Servicios from '../components/sections/Servicios';
import Companies from '../components/sections/Companies';
import Faq from '../components/sections/Faq';

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
      <Productos />
      <Companies />
      <Faq />
    </div>
  );
}
