import route from './route';

export const patchClientRoutes = ({ routes }: any) => {
  // routes.unshift(route);
  routes[0] = route;
};
