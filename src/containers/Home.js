import React, { Fragment } from 'react';
import { useQuery } from '@apollo/client';
import MainLayout from '../layouts/MainLayout';
import { GET_HOME_DATA } from '../graphql/queries/home';
import '../static/styles/home.sass';

const Home = ({ children }) => {
  const { loading, data, error } = useQuery(GET_HOME_DATA);

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
