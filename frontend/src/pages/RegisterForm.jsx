import React, { useState } from 'react';
import Form from '../components/Form';
import FormRowDiv from '../components/FormRowDiv';
import ButtonPrimary from '../components/ButtonPrimary';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <Form>
      <h2 className="py-3 text-center text-2xl font-bold">
        Start tracking your <span className="text-limeMain">trips</span>
      </h2>
      <p className="text-greyMain">
        If you already have an account &rarr;{' '}
        <Link
          to="/login"
          className="text-limeMain underline underline-offset-2 hover:text-limeHover hover:no-underline"
        >
          log in
        </Link>
      </p>
      <FormRowDiv>
        <label>Username</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="bg rounded px-3 py-2"
        />
      </FormRowDiv>
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
      <FormRowDiv>
        <label>Confirm password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="bg rounded px-3 py-2"
        />
      </FormRowDiv>
      <ButtonPrimary>Register</ButtonPrimary>
    </Form>
  );
};

export default RegisterForm;
