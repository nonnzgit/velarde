import { ScCardContainer } from '../../styles/productos';
import { Col } from 'react-bootstrap';
import React from 'react';

const Card = props => {
  return (
    <Col
      lg={4}
      md={6}
      sm={12}
      xs={12}
      style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
    >
      <ScCardContainer className="shadow">
        <img
          src={props.imagen}
          alt={props.alt}
          title={props.alt}
          width={'100%'}
        />
        {console.log(props)}
        <div className="CcCardInfo">
          <div className="CcTextInfo">
            <h4>{props.titulo}</h4>
            <p>{props.bait}</p>
          </div>
        </div>
      </ScCardContainer>
    </Col>
  );
};

export default Card;
