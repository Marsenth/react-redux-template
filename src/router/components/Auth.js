import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from '../../redux/actions/auth';

const Auth = ({ children }) => {
  const { loading, error } = useSelector((state) => state.auth.AUTH);
  const dispatch = useDispatch();
  console.log('loading: ', loading, error);

  useEffect(() => {
    dispatch(authenticate());
  }, []);

  return loading ? (
    <p>Loading</p>
  ) : (
    children
  );
};

export default Auth;
