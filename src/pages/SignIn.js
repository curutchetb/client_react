import React, {useEffect, useState} from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import SignInForm from '../components/forms/SignInForm'
import validator from 'validator';
import { isObjEmpty } from '../helpers/helpers';
import { loginUser } from '../actions/authActions';

export default function SignIn() {

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch(); 
  
  useEffect(() => {
    //cuando inicie el componente
  });

  const login = ({email, password}) =>{
    const errors = {};
    setErrors(errors);

    if (!validator.isEmail(email)) {
      errors.email = "The email is incorrect";
    }

    if (validator.isEmpty(password)) {
      errors.password = "The password cannot be empty";
    }

    if (!isObjEmpty(errors)) {
      setErrors(errors);
      return;
    }

    //llamar nuestra funcion login que vamos a creare en authActions

    dispatch(loginUser({email, password}))
      .then(response => {

      })
      .catch(err => {
        
      })
  }

  return (
    <Container className='mt-5'>
      <Row>
        <Col sm='12' md={{span: 8, offset: 2}} lg={{span:6, offset: 3}}>
          <Card body>
            <h3>Sign In</h3><hr></hr>
            <SignInForm errors={errors} onSubmitCallback={login}></SignInForm>
            <div className='mt-4'>
              <Link to={"/signup"}>Do not have an account? Sign up here!</Link>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
