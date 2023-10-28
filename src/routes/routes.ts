export type JsxComponent = () => JSX.Element;

export interface RouteApp {
  path: string;
  to: string;
  name: string;
}

const routes: RouteApp[] = [
  {
    path: 'dashboard',
    to: '/admin/dashboard',
    name: 'Dashboard',
  },
  {
    path: 'wallet',
    to: '/admin/wallet',
    name: 'Wallet',
  },
  {
    path: 'create',
    to: '/admin/wallet/create',
    name: 'Wallet',
  },
];

export const findRoute = (pathname: string): RouteApp => {
  const route = routes.find(({ to }) => to === pathname);
  if (route) return route;
  return routes[0];
};

export default routes;
