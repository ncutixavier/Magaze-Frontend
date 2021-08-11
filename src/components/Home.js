import React from 'react';
import { Container, Row, Col, Alert, Image } from 'react-bootstrap';
import home from '../assets/images/home.png';

const Home = () => {
  return (
    <div className='home-page'>
      <Container>
        <Alert variant='primary'>
          <Row>
            <Col md={6} className='p-5'>
              <Image width='100%' src={home} rounded />
            </Col>
            <Col md={6}>
              <div className='home-content'>
                <h1>Magaze Online System</h1>
                <p>
                  Manage and control your business transactions easily. With
                  Magaze, you will no longer need a book to record all
                  transactions made daily.
                </p>
                <a href='/login' className='home-btn'>
                  Sign In
                </a>
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
            </Col>
          </Row>
          {/* <div className="footer">
                        <span>Contact us on 0783573335</span>
                        <span></span>
                    </div> */}
          <div className='home-footer text-center'>
            &copy; {new Date().getFullYear()} Magaze
          </div>
        </Alert>
      </Container>
    </div>
  );
};

export default Home;
