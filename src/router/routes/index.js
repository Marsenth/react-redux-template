import Root from '../components';
import Login from '../../containers/Login';
import Home from '../../containers/Home';

export default [
  { exact: true, path: '/', component: Root },
  {
    exact: true,
    path: '/login',
    component: Login,
  },
  {
    exact: true,
    path: '/mario-app',
    component: Home,
  },
];
