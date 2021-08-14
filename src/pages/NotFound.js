import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='home-page'>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Alert variant='primary'>
              <div className='home-content py-5'>
                <h1>404 | NOT FOUND</h1>
                <p>
                  The page you're looking for, It is no longer existed here.{' '}
                </p>
                <Link to='/' className='home-btn'>
                  Back to home
                </Link>

                <div className='home-icons'>
                  <span>
                    <a
                      href='https://web.facebook.com/ndagijimana.xavier.1'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <i className='bi bi-facebook'></i>
                    </a>
                  </span>
                  <span>
                    <a
                      href='https://twitter.com/ncutixavier'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <i className='bi bi-twitter'></i>
                    </a>
                  </span>
                  <span>
                    <a
                      href='http://linkedin.com/in/ncuti-xavier-979284197'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <i className='bi bi-linkedin'></i>
                    </a>
                  </span>
                  <span>
                    <a
                      href='https://www.instagram.com/ncutixavier/?hl=en'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <i className='bi bi-instagram'></i>
                    </a>
                  </span>
                </div>
              </div>
            </Alert>
          </Col>
        </Row>
        <div className='home-footer text-center'>
          &copy; {new Date().getFullYear()} Magaze
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
