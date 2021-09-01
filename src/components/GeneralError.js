import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';

const GeneralError = (props) => {
    return (
        <div className='home-page'>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Alert variant='primary'>
                            <div className='home-content py-5'>
                                <h1>ERROR</h1>
                                <p>
                                    Error occured while fetching users. Please try again.
                                </p>
                            </div>
                        </Alert>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default GeneralError;
