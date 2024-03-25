import React, { useState } from 'react';
import Form from '../components/Form';
import FormRowDiv from '../components/FormRowDiv';
import ButtonPrimary from '../components/ButtonPrimary';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  useLogoutMutation,
  useRegisterMutation,
} from '../slices/usersApiSlice';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../slices/authSlice';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [register, { isLoading }] = useRegisterMutation();

  function clearInputFields() {
    setPassword('');
    setEmail('');
    setEmail('');
    setName('');
  }

  async function handleRegister(e) {
    e.preventDefault();
    if (!email || !password || !name || !confirmPassword) {
      toast.error('Fill all the fields');
      return;
    }
    if (password !== confirmPassword) {
      toast.error('The passwords you provided are different. Try again.');
      return;
    }

    try {
      const res = await register({ email, password, name }).unwrap();
      dispatch(setCredentials({ ...res }));
      clearInputFields();
      setConfirmPassword('');
      navigate('/add');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  }

  return (
    <Form onSubmit={handleRegister}>
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
          value={name}
          onChange={(e) => setName(e.target.value)}
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
