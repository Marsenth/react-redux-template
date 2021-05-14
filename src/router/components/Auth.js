import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from '../../redux/actions/auth';

const Auth = ({ children }) => {
  const { replace } = useHistory();
  const { pathname } = useLocation();
  const { auth: { AUTH, LOGIN } } = useSelector();
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();

  const dispatchAuthenticate = () => dispatch(authenticate());

  useEffect(() => {
    if (!AUTH.data && !AUTH.error) {
      if (token) {
        dispatchAuthenticate();
      } else if (pathname !== '/login') replace('/login');
    } else if (AUTH.data && pathname.split('/')[0] !== 'mario-app') replace('/mario-app');
  }, [AUTH.data]);

  useEffect(() => {
    if (AUTH.error && pathname !== '/login') replace('/login');
  }, [AUTH.error]);

  useEffect(() => {
    if (LOGIN.data) {
      localStorage.setItem('token', LOGIN.data);
      dispatchAuthenticate();
    }
  }, [LOGIN.data]);

  return AUTH.loading ? (
    <p className="loading">Loading</p>
  ) : (
    children
  );
};

export default Auth;
