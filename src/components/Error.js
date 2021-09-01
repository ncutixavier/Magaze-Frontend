import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import WarningIcon from '@material-ui/icons/Warning';

const Error = (props) => {
  return (
    <div className='home-page h-auto'>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Alert variant='primary'>
              <div className='home-content py-5'>
                <WarningIcon style={{fontSize: '40px', marginBottom: "10px"}} />
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
