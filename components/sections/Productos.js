import { ScSubtitle, Separator, ScTextLead } from '../../styles/globalStyles';
import { Container, Button, Row } from 'react-bootstrap';
import { ScProductos } from '../../styles/productos';
import Cards from '../UI/Cards';
import Producto1 from '../../public/producto-1.jpg';
import Producto2 from '../../public/producto-2.jpg';
import Producto3 from '../../public/producto-3.jpg';
import Producto4 from '../../public/producto-4.jpg';
import Producto5 from '../../public/producto-5.jpg';
import Producto6 from '../../public/producto-6.jpg';
import Producto7 from '../../public/producto-7.jpg';
import Producto8 from '../../public/producto-8.jpg';

import { useState } from 'react';
import Link from 'next/link';

const Productos = () => {
  /* Categoría 1=Auto 2=Particulares 3=Empresas 4=Personas */
  const [productsInfo] = useState([
    {
      imagen: Producto1,
      titulo: ['Seguro de ', <span>Coche</span>, '.'],
      bait: '- Desde daños causados a terceros a todo riesgo, elige tu seguro.',
      categoria: 1,
      alt: 'Seguro de Coche',
    },
    {
      imagen: Producto2,
      titulo: ['Seguro de ', <span>Hogar</span>, '.'],
      bait: '- Es fundamental proteger la mayor inversión que hacemos en nuestra vida.',
      categoria: 2,
      alt: 'Seguro de Hogar',
    },
    {
      imagen: Producto3,
      titulo: ['Seguro de ', <span>Salud</span>, '.'],
      bait: '- Pruebas de diagnóstico y consultas médicas pero... ¡Cuando las necesitas!',
      categoria: 4,
      alt: 'Seguro de Salud',
    },
    {
      imagen: Producto4,
      titulo: ['Seguro de ', <span>Vida</span>, '.'],
      bait: '- La salud financiera de los tuyos, pase lo que pase.',
      categoria: 4,
      alt: 'Seguro de Vida',
    },
    {
      imagen: Producto5,
      titulo: ['Seguro de ', <span>Decesos</span>, '.'],
      bait: '- Con la ayuda adecuada, en los momentos más duros no tendremos que ocuparnos de todo.',
      categoria: 4,
      alt: 'Seguro de decesos',
    },
    {
      imagen: Producto6,
      titulo: ['Seguro de ', <span>Comercio</span>, '.'],
      bait: '- Asegura tu fuente de ingresos para vivir tranquilo.',
      categoria: 3,
      alt: 'Seguro de Comercio',
    },
    {
      imagen: Producto7,
      titulo: ['Seguro de ', <span>Comunidades</span>, '.'],
      bait: '- Compartir con la mayor de las confianzas.',
      categoria: 2,
      alt: 'Seguro de Comunidades',
    },
    {
      imagen: Producto8,
      titulo: ['Seguro de ', <span>Resp. Civil</span>, '.'],
      bait: '- Porque nuestra vida y nuestro trabajo son una responsabilidad, pero solo hasta cierto punto.',
      categoria: 3,
      alt: 'Seguro de Responsabilidad Civil',
    },
  ]);

  const [catIdx, setCatIdx] = useState(0);

  function handleClick(e) {
    setCatIdx({ catIdx: e.target.value });
  }

  return (
    <ScProductos id="productos">
      <Container fluid={'xl'}>
        <ScSubtitle responsive>Productos</ScSubtitle>
        <Separator style={{ display: 'block' }} />
        <ScTextLead style={{ textAlign: 'center' }}>
          Estos son algunos de los seguros que tenemos. Si necesitas cualquier
          otro no dudes en contactarnos.
        </ScTextLead>

        <div className="botonera">
          <Button
            onClick={handleClick}
            className="btnCateg"
            value={0}
            style={{ margin: '0 0.3rem 1rem 0.3rem' }}
          >
            Todos
          </Button>
          <Button
            onClick={handleClick}
            className="btnCateg"
            value={1}
            style={{ margin: '0 0.3rem 1rem 0.3rem ' }}
          >
            Autos
          </Button>
          <Button
            onClick={handleClick}
            className="btnCateg"
            value={2}
            style={{ margin: '0 0.3rem 1rem 0.3rem' }}
          >
            Particulares
          </Button>
          <Button
            onClick={handleClick}
            className="btnCateg"
            value={3}
            style={{ margin: '0 0.3rem 1rem 0.3rem' }}
          >
            Empresas
          </Button>
          <Button
            onClick={handleClick}
            className="btnCateg"
            value={4}
            style={{ margin: '0 0.3rem 1rem 0.3rem' }}
          >
            Personas
          </Button>
          <Link href="/tarificador/salud" passHref>
            <Button
              className="btnTarif"
              style={{ margin: '0 0.3rem 1rem 0.3rem' }}
            >
              Tarificador Salud
            </Button>
          </Link>
          <Link href="/tarificador/impagoalquiler" passHref>
            <Button
              className="btnTarif"
              style={{ margin: '0 0.3rem 1rem 0.3rem' }}
            >
              Tarificador Impago Alquiler
            </Button>
          </Link>
        </div>

        <Row>
          <Cards products={productsInfo} catIdx={catIdx} />
        </Row>
      </Container>
    </ScProductos>
  );
};

export default Productos;
