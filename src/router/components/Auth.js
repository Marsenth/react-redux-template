import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from '../../redux/actions/auth';

const Auth = ({ children }) => {
  const { replace } = useHistory();
  const { pathname } = useLocation();
  const { loading, data, error } = useSelector((state) => state.auth.AUTH);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data && !error) dispatch(authenticate());
  }, []);

  useEffect(() => {
    if (error && pathname !== '/login') replace('/login');
  }, [error]);

  return loading ? (
    <p>Loading</p>
  ) : (
    children
  );
};

export default Auth;
