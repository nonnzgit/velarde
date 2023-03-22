import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LogoG10 from '../../public/logoG10.png';
import { ScFooter } from '../../styles/footer';

const Footer = () => {
  return (
    <ScFooter id="footer">
      <Container fluid="xl">
        <Row>
          <Col className="companies" lg={4}>
            <a
              href="https://grupo10mb.com/"
              target="_blank"
              rel="noreferrer noopener"
              style={{ marginBottom: '1rem' }}
            >
              <Image
                src={LogoG10}
                alt="logo correduria"
                width={200}
                height={50}
              />
            </a>
          </Col>
          <Col className="linksCol" lg={2}></Col>
          <Col className="linksCol" lg={2}></Col>
          <Col className="linksCol" lg={2}>
            <span>Tarificador</span>
            <ul>
              <li>
                <Link href="/tarificador/salud" passHref>
                  <a className="routerLink">Seguro de Salud</a>
                </Link>
              </li>
              <li>
                <Link href="/tarificador/impagoalquiler" className="routerLink">
                  <a className="routerLink">Seguro de Impago Alquiler</a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col className="linksCol" lg={2}>
            <span>Enlaces de interés</span>
            <ul>
              <li>
                <a
                  href="https://www1.sedecatastro.gob.es/cycbieninmueble/ovcbusqueda.aspx"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="routerLink"
                >
                  Sede Catrastro
                </a>
              </li>

              <li>
                <a
                  href="https://www.consorseguros.es/web/inicio"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="routerLink"
                >
                  Consorcio compensación de seguros
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </ScFooter>
  );
};

export default Footer;
