import './Admin.scss';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';
import { useAuth0 } from '@auth0/auth0-react';
import { ScreenLoading } from './ScreenLoading/ScreenLoading';
import { setUserAuthorizationAction, setUserSubAction } from '../../../store/modules/auth';

export const Admin = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();

  const setUpUserToken = async () => {
    const authorization = await getAccessTokenSilently();
    if (authorization) dispatch(setUserAuthorizationAction(authorization));
  };

  const setUpUserSub = () => {
    const sub = user?.sub || '';
    if (sub) dispatch(setUserSubAction(sub));
  };

  useEffect(() => {
    setUpUserSub();
  }, [user]);

  useEffect(() => {
    setUpUserToken();
  }, []);

  return (
    <main className="admin">
      {!isAuthenticated && <ScreenLoading />}
      <Sidebar />
      <div className="admin-content">
        <Header />
        <section className="admin-content__section">
          <Outlet />
        </section>
      </div>
    </main>
  );
}; 