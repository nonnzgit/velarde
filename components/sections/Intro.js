import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import { ScTextBasic, ScTitle } from '../../styles/globalStyles';
import { ScIntroSection } from '../../styles/intro';
import { ButtonArrow } from '../UI/Buttons';
import PolizaIntro from '../../public/intro.svg';

const Intro = () => {
  return (
    <>
      <ScIntroSection id="intro">
        <Container fluid="xl">
          <Row className=" align-items-center justify-content-center text-white m-auto">
            <Col md={6} sm={12} className="pl-1 pr-1">
              <ScTitle>
                ¡Estás un poco más cerca de estar
                <strong className="color-secondary"> bien asegurado</strong>!
              </ScTitle>
              <ScTextBasic responsive className="texto1">
                Solicita tu estudio integral. Comprobaremos tus necesidades de
                seguro y te ofreceremos las pólizas del mercado que más se
                adapten a ti.
              </ScTextBasic>
              <a href="#contacto">
                <ButtonArrow
                  innerText={'Ponte en contacto con nosotros'}
                  className="font-weight-normal"
                />
              </a>
            </Col>
            <Col md={6} sm={12} className="pl-1 pr-1">
              <Image
                src={PolizaIntro}
                alt="poliza de seguro"
                layout="responsive"
              />
            </Col>
          </Row>
        </Container>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,128L40,112C80,96,160,64,240,80C320,96,400,160,480,202.7C560,245,640,267,720,240C800,213,880,139,960,122.7C1040,107,1120,149,1200,160C1280,171,1360,149,1400,138.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
      </ScIntroSection>
    </>
  );
};

export default Intro;
