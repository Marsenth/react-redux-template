import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from '../../redux/actions/auth';

const Auth = ({ children }) => {
  const { replace } = useHistory();
  const { pathname } = useLocation();
  const { AUTH, LOGIN } = useSelector((state) => state.auth);
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();

  useEffect(() => {
    if (!AUTH.data && !AUTH.error) {
      if (token) {
        dispatch(authenticate());
      } else if (pathname !== '/login') replace('/login');
    } else if (AUTH.data && pathname.split('/')[0] !== 'mario-app') replace('/mario-app');
  }, [AUTH.data]);

  useEffect(() => {
    if (AUTH.error && pathname !== '/login') replace('/login');
  }, [AUTH.error]);

  useEffect(() => {
    if (LOGIN.data) {
      localStorage.setItem('token', LOGIN.data);
      dispatch(authenticate());
    }
  }, [LOGIN.data]);

  return AUTH.loading ? (
    <p>Loading</p>
  ) : (
    children
  );
};

export default Auth;
