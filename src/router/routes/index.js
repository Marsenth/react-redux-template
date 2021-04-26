import Root from '../components';
import Login from '../../containers/Login';

export default [
  { exact: true, path: '/', component: Root },
  {
    exact: true,
    path: '/login',
    component: Login,
  },
];
