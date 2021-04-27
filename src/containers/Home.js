import React from 'react';
import MainLayout from '../layouts/MainLayout';
import '../static/styles/home.sass';

const Home = ({ children }) => (
  <MainLayout className="home">
    <h1>{"Bienvenido a Mario's app"}</h1>
    {children}
  </MainLayout>
);

export default Home;
