import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CreateRoutes from './components/CreateRoutes';
import routes from './routes';

const AppRouter = () => (
  <Router>
    <CreateRoutes {...{ routes }} />
  </Router>
);

export default AppRouter;
