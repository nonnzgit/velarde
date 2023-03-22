import Head from 'next/head';
import BsNavBar from '../components/sections/BsNavBar';
import Intro from '../components/sections/Intro';
import Productos from '../components/sections/Productos';
import Servicios from '../components/sections/Servicios';
import Companies from '../components/sections/Companies';
import Faq from '../components/sections/Faq';
import Contacto from '../components/sections/Contacto';
import Footer from '../components/sections/Footer';
import { ButtonToTop } from '../components/UI/Buttons';

export default function Home() {
  return (
    <div>
      <BsNavBar />
      <Intro />
      <Servicios />
      <Productos />
      <Companies />
      <Faq />
      <Contacto />
      <Footer />
      <ButtonToTop />
    </div>
  );
}
