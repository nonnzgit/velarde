import { Nav, Navbar, Container, NavbarBrand } from 'react-bootstrap';
import { ScNavbar, ScNavlink } from '../../styles/bsnavbar';
import { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { ButtonPhone } from '../UI/Buttons';
import Link from 'next/link';

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
          <img
            src="/logo.svg"
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
            <Link
              active
              href="#servicios"
              passHref
              onClick={() => setToggleHam(prevToggleHam => !prevToggleHam)}
            >
              <ScNavlink active>Servicios</ScNavlink>
            </Link>
            <Link
              active
              href="#productos"
              passHref
              onClick={() => setToggleHam(prevToggleHam => !prevToggleHam)}
            >
              <ScNavlink active>Productos</ScNavlink>
            </Link>
            <Link
              active
              href="#companies"
              passHref
              onClick={() => setToggleHam(prevToggleHam => !prevToggleHam)}
            >
              <ScNavlink active>Compañías</ScNavlink>
            </Link>
            <Link
              active
              href="#faq"
              passHref
              onClick={() => setToggleHam(prevToggleHam => !prevToggleHam)}
            >
              <ScNavlink active>FAQ</ScNavlink>
            </Link>
            <Link
              active
              href="#contacto"
              passHref
              onClick={() => setToggleHam(prevToggleHam => !prevToggleHam)}
            >
              <ScNavlink active>Contacta</ScNavlink>
            </Link>
            <Link
              href="tel:+34955327396"
              passHref
              onClick={() => setToggleHam(prevToggleHam => !prevToggleHam)}
            >
              <ScNavlink>
                <ButtonPhone innerText={'955 327 396'} />
              </ScNavlink>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </ScNavbar>
  );
};

export default BsNavBar;
