
export type JsxComponent = () => JSX.Element;

export interface RouteApp {
  path: string;
  to: string;
  name: string;
}

const routes: RouteApp[] = [
  {
    path: 'dashboard',
    to: '/dashboard',
    name: 'Dashboard',
  },
  {
    path: 'wallet',
    to: '/wallet',
    name: 'Wallet',
  }
];

export const findRoute = (pathname: string): RouteApp => {
  const route = routes.find(({ to }) => to === pathname);
  if (route) return route;
  return routes[0];
};

export default routes;