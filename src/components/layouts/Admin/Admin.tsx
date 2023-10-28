import { Outlet } from 'react-router-dom';

import './Admin.scss';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';

export const Admin = () => {

  return (
    <main className="admin">
      { /* !isAuthenticated && <ScreenLoading /> */}
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