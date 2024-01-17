import config from '../config';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';

const { routesConfig } = config;

const routesConfiguration = [
  { path: routesConfig.login, component: Login },
  { path: routesConfig.home, component: Home },
  { path: routesConfig.profile, component: Profile },

]
export { routesConfiguration };
