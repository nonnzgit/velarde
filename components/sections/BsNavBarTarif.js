// BOOTSTRAP
import { Nav, Navbar, Container, NavbarBrand } from 'react-bootstrap';
// STYLED COMPONENTS
import { ScNavbar, ScNavlink } from '../../styles/bsnavbar';
import { ButtonPhone } from '../UI/Buttons';
// ICONS
import { FaBars, FaTimes } from 'react-icons/fa';
// HOOKS
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const BsNavBarTarif = () => {
  const [toggleHam, setToggleHam] = useState(false);
  const [path, setPath] = useState(null);

  useEffect(() => {
    if (window) {
      setPath(window.location.pathname);
    }
  }, []);

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
            {/* Siempre hay condicionar el renderizado del boton a que no estemos en el path al que lleva ese boton */}

            {path !== '/tarificador/salud' && (
              <>
                <Link
                  active
                  href="/tarificador/salud"
                  passHref
                  onClick={() => setToggleHam(prevToggleHam => !prevToggleHam)}
                >
                  <ScNavlink active>Salud</ScNavlink>
                </Link>

                <ScNavlink
                  active
                  href="https://wr.auraseguros.com/wr/Tarificador_D_Velarde"
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={() => setToggleHam(prevToggleHam => !prevToggleHam)}
                >
                  Decesos
                </ScNavlink>
              </>
            )}

            {path !== '/tarificador/impagoalquiler' && (
              <>
                <Link
                  href="/tarificador/impagoalquiler"
                  passHref
                  onClick={() => setToggleHam(prevToggleHam => !prevToggleHam)}
                >
                  <ScNavlink active>Impago Alquiler</ScNavlink>
                </Link>
                <ScNavlink
                  active
                  href="https://wr.auraseguros.com/wr/Tarificador_D_Velarde"
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={() => setToggleHam(prevToggleHam => !prevToggleHam)}
                >
                  Decesos
                </ScNavlink>
              </>
            )}

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

export default BsNavBarTarif;
