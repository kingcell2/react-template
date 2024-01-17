import { routesConfiguration } from './routes';

/**
 * Find component by pathname.
 * @param {string} path
 * @returns React.FC
 */
function findComponent(path) {
  const routeSelected = routesConfiguration.find((route) => {
    return route.path === path;
  });

  if (routeSelected) {
    return routeSelected.component;
  }

  throw new Error(`[App Error]: Path ${path} is not defined!`);
}

export { findComponent };
