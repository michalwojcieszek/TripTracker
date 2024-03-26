import React, { useState } from 'react';
import Form from '../components/Form';
import FormRowDiv from '../components/FormRowDiv';
import ButtonPrimary from '../components/ButtonPrimary';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';
import { useGetTripsMineQuery } from '../slices/tripsApiSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoadingMutate }] = useLoginMutation();

  function clearInputFields() {
    setPassword('');
    setEmail('');
  }

  async function handleLogIn(e) {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Fill all the fields');
      return;
    }
    try {
      const resAuth = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...resAuth }));
      clearInputFields();
      navigate('/places');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  }

  return (
    <>
      {isLoadingMutate ? (
        <Spinner />
      ) : (
        <Form onSubmit={handleLogIn}>
          <h2 className="py-3 text-center text-2xl font-bold">Get started!</h2>
          <p className="text-greyMain">
            If you don't have an account &rarr;{' '}
            <Link
              to="/register"
              className="uppercase text-limeMain underline underline-offset-2 hover:text-limeHover hover:no-underline"
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
              className="bg rounded bg-greyLight px-3 py-2"
            />
          </FormRowDiv>
          <FormRowDiv>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg rounded bg-greyLight px-3 py-2"
            />
          </FormRowDiv>
          <ButtonPrimary>Log in</ButtonPrimary>
        </Form>
      )}
    </>
  );
};

export default LoginForm;
