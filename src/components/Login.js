import React, { Component } from 'react';
import { Container, Row, Col, Alert, Image } from 'react-bootstrap';
import home from '../assets/images/home.png';
import logo from '../assets/images/logo.png';
import { Button, CircularProgress } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAction } from '../redux/actions/loginAction';

export class Login extends Component {
  state = {
    formData: {
      email: '',
      password: '',
    },
  };

  handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { formData } = this.state;
    if (formData !== null) {
      await this.props.loginAction(formData, this.props.history);
    }
  };

  render() {
    const { formData } = this.state;
    return (
      <div className='home-page login-page'>
        <Container>
          <Alert variant='primary'>
            <Row>
              <Col md={6} className='p-5'>
                <Image width='100%' src={home} rounded />
              </Col>
              <Col md={6}>
                <div className='login-content'>
                  <div className='login-header'>
                    <div className='login-header-logo'>
                      <img src={logo} alt='' />
                    </div>
                    <h1>Magaze Online System</h1>
                  </div>

                  <div className='login-message'>
                    {this.props.loginState.error !== '' ? (
                      <Alert variant='danger'>
                        {this.props.loginState.error}
                      </Alert>
                    ) : (
                      ''
                    )}
                  </div>

                  <h1 className='login-title'>Login</h1>
                  <ValidatorForm
                    className='login-form'
                    onSubmit={this.handleSubmit}
                    onError={(errors) => console.log(errors)}
                  >
                    <div className='login-input'>
                      <TextValidator
                        label='Email'
                        inputProps={{ style: { fontSize: 18 } }}
                        InputLabelProps={{ style: { fontSize: 18 } }}
                        fullWidth
                        onChange={this.handleChange}
                        name='email'
                        value={formData.email}
                        validators={['required', 'isEmail']}
                        errorMessages={[
                          'Email is required',
                          'Email is not valid',
                        ]}
                      />
                    </div>

                    <div className='login-input'>
                      <TextValidator
                        label='Passsword'
                        inputProps={{ style: { fontSize: 18 } }}
                        InputLabelProps={{ style: { fontSize: 18 } }}
                        fullWidth
                        onChange={this.handleChange}
                        name='password'
                        value={formData.password}
                        type='password'
                        validators={['required']}
                        errorMessages={['Password is required']}
                      />
                    </div>
                    <Button
                      type='submit'
                      variant='contained'
                      style={{
                        marginTop: '4rem',
                        fontSize: '1.5rem',
                        padding: '.5rem',
                        backgroundColor: '#084298',
                        color: '#fff',
                      }}
                      fullWidth
                    >
                      <span>Sign in</span>
                      <CircularProgress
                        style={{
                          marginLeft: '3rem',
                          display: this.props.loginState.loading,
                        }}
                        size={20}
                        disableShrink
                        color='inherit'
                      />
                    </Button>
                  </ValidatorForm>
                </div>
                <Link to='/forgotpassword' className='forgot-link text-center'>
                  Forgot Password
                </Link>
              </Col>
            </Row>
            <div className='home-footer text-center'>
              &copy; {new Date().getFullYear()} Magaze
            </div>
          </Alert>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginState: state.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (data, history) => dispatch(loginAction(data, history)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
