import React, { Fragment } from 'react';
import MainLayout from '../layouts/MainLayout';
import '../static/styles/home.sass';

const Home = ({ children }) => {
  const { loading, data, error } = { loading: false, data: { home: 'Hola mundo' } };

  return loading ? (
    <p>Loading</p>
  ) : (
    <Fragment>
      {error ? (
        <p>{'Ha ocurrido un error inesperado.'}</p>
      ) : (
        <MainLayout className="home">
          <h1>{data.home}</h1>
          {children}
        </MainLayout>
      )}
    </Fragment>
  );
};

export default Home;
