import React, { useRef } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import AuthHelper from '../../service/AuthHelper';

import './LoginPage.scss';

const LoginPage = () => {
  const emailRef = useRef();
  const passRef = useRef();

  const loginClick = async () => {
    const result = await AuthHelper.login(emailRef.current.value, passRef.current.value);
    console.log(result);
  };

  return <div className='loginPage'>
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text>Email</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="Input your Email"
        ref={emailRef}
      />
    </InputGroup>

    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text>Password</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="Input your password"
        type='password'
        ref={passRef}
      />
    </InputGroup>

    <div className='float-right'>
      <Button variant="primary" className='mr-3' onClick={loginClick}>Login</Button>
      <Button variant="secondary">Create</Button>
    </div>
  </div>;
};

export default LoginPage;