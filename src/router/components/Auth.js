import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useAuthActions from '../../redux/actions/auth';

const Auth = ({ children }) => {
  const { replace } = useHistory();
  const { pathname } = useLocation();
  const { authenticate } = useAuthActions();
  const { auth: { AUTH, LOGIN } } = useSelector((state) => state);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!AUTH.loading && !AUTH.data && !AUTH.error) {
      if (token) {
        authenticate();
      } else if (pathname !== '/login') replace('/login');
    } else if (AUTH.data && pathname.split('/')[0] !== 'mario-app') replace('/mario-app');
  }, [AUTH.data]);

  useEffect(() => {
    if (AUTH.error && pathname !== '/login') replace('/login');
  }, [AUTH.error]);

  useEffect(() => {
    if (LOGIN.data) {
      localStorage.setItem('token', LOGIN.data);
      authenticate();
    }
  }, [LOGIN.data]);

  return AUTH.loading ? (
    <p className="loading">Loading</p>
  ) : (
    children
  );
};

export default Auth;
