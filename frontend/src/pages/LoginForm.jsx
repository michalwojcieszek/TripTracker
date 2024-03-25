import React, { useState } from 'react';
import Form from '../components/Form';
import FormRowDiv from '../components/FormRowDiv';
import ButtonPrimary from '../components/ButtonPrimary';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogIn() {}

  return (
    <Form>
      <h2 className="py-3 text-center text-2xl font-bold">Get started!</h2>
      <p className="text-greyMain">
        If you don't have an account &rarr;{' '}
        <Link
          to="/register"
          className="text-limeMain underline underline-offset-2 hover:text-limeHover hover:no-underline"
        >
          register
        </Link>
      </p>
      <FormRowDiv>
        <label>Email</label>
        <input
          type="mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg rounded px-3 py-2"
        />
      </FormRowDiv>
      <FormRowDiv>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg rounded px-3 py-2"
        />
      </FormRowDiv>
      <ButtonPrimary onClick={handleLogIn}>Log in</ButtonPrimary>
    </Form>
  );
};

export default LoginForm;
