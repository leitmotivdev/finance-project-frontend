import './Admin.scss';

import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';

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