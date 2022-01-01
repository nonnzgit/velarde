import { Nav, Navbar, Container, NavbarBrand } from 'react-bootstrap';
import { ScNavbar, ScNavlink } from '../../styles/bsnavbar';
import { useState } from 'react';
import Image from 'next/image';
import { FaTimes, FaBars } from 'react-icons/fa';
import { ButtonPhone } from '../UI/Buttons';
import Logo from '../../public/logo.svg';

const BsNavBar = () => {
  const [toggleHam, setToggleHam] = useState(false);

  return (
    <ScNavbar
      collapseOnSelect
      className="navbar-dark shadow sticky-top"
      expand="lg"
    >
      <Container fluid="xl">
        <NavbarBrand>
          <Image
            src={Logo}
            alt="Logo de correduría Velarde Seguros / Grupo 10 Montequinto"
          />
        </NavbarBrand>

        <div className="CcHamMenu">
          <Navbar.Toggle
            onClick={() => setToggleHam(prevToggleHam => !prevToggleHam)}
            className="text-white border-0"
            aria-controls="basic-navbar-nav"
          >
            {toggleHam ? <FaTimes size={25} /> : <FaBars size={25} />}
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto d-flex align-items-center">
            <ScNavlink
              active
              href="#servicios"
              onClick={() => setToggleHam(prevToggleHam => !prevToggleHam)}
            >
              Servicios
            </ScNavlink>
            <ScNavlink
              active
              href="#productos"
              onClick={() => setToggleHam(prevToggleHam => !prevToggleHam)}
            >
              Productos
            </ScNavlink>
            <ScNavlink
              active
              href="#companies"
              onClick={() => setToggleHam(prevToggleHam => !prevToggleHam)}
            >
              Compañías
            </ScNavlink>
            <ScNavlink
              active
              href="#faq"
              onClick={() => setToggleHam(prevToggleHam => !prevToggleHam)}
            >
              FAQ
            </ScNavlink>
            <ScNavlink
              active
              href="#contacto"
              onClick={() => setToggleHam(prevToggleHam => !prevToggleHam)}
            >
              Contacta
            </ScNavlink>
            <ScNavlink
              href="tel:+34955327396"
              onClick={() => setToggleHam(prevToggleHam => !prevToggleHam)}
            >
              <ButtonPhone innerText={'955 327 396'} />
            </ScNavlink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </ScNavbar>
  );
};

export default BsNavBar;
