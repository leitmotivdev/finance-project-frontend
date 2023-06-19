import './Admin.scss';

import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar/Sidebar';
import { Header } from '../Header/Header';

export const Admin = () => {
  return (
    <main className="admin">
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