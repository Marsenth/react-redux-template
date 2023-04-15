import React, { Fragment, useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import useHomeActions from '../redux/actions/home';
import '../static/styles/home.sass';

const Home = ({ children }) => {
  const { welcomeAction } = useHomeActions();

  useEffect(() => {
    welcomeAction();
  }, []);

  return (
    <Fragment>
      <MainLayout className="home">
        <h1>{'Hola mundo!'}</h1>
        {children}
      </MainLayout>
    </Fragment>
  );
};

export default Home;
