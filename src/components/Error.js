import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';

const Error = (props) => {
  return (
    <div className='home-page'>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Alert variant='primary'>
              <div className='home-content py-5'>
                <h1>ERROR</h1>
                <p>
                  {props.error}
                </p>
              </div>
            </Alert>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Error;
