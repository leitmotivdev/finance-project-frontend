import './Sidebar.scss';

import { NavLink, useLocation } from 'react-router-dom';
import { ICON_SIDEBAR_PATH, LOGO_IMAGE } from '../../../constants/path';

export const Sidebar = () => {

  const location = useLocation();

  const sidebarMenuOptions = [
    { name: 'Dashboard', icon: 'dashboard-icon', path: '/dashboard' },
    { name: 'Wallet', icon: 'egresos-icon', path: '/wallet' },
    { name: 'Prestamos', icon: 'prestamos-icon', path: '/prestamos' },
    { name: 'Créditos', icon: 'creditos-icon', path: '/creditos' },
  ];

  const sidebarHelpOptions = [
    { name: 'Configuraciones', icon: 'configuraciones-icon', path: '/configuraciones' },
    { name: 'Ayuda', icon: 'ayuda-icon', path: '/ayuda' },
  ];

  return (
    <aside className="sidebar">
      <picture className="app-logo-container">
        <img className="app-logo" src={LOGO_IMAGE} />
      </picture>

      <nav className="sidebar-nav">
        <section>
          <h3 className="nav-title">MENÚ</h3>
          <ul>
            {
              sidebarMenuOptions.map(({ name, icon, path }) => (
                <li key={name}>
                  <NavLink className={({ isActive }) => (`sidebar-option ${isActive && 'sidebar-option__active'}`)} to={path}>
                    {
                      location.pathname === path
                        ? <img src={`${ICON_SIDEBAR_PATH}/${icon}-active.svg`} />
                        : <img src={`${ICON_SIDEBAR_PATH}/${icon}.svg`} />
                    }
                    <p>{name}</p>
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </section>

        <section>
          <h3 className="nav-title">AYUDA</h3>
          <ul>
            {
              sidebarHelpOptions.map(({ name, icon, path }) => (
                <li key={name}>
                  <NavLink className={({ isActive }) => (`sidebar-option ${isActive && 'sidebar-option__active'}`)} to={path}>
                    {
                      location.pathname === path
                        ? <img src={`${ICON_SIDEBAR_PATH}/${icon}-active.svg`} />
                        : <img src={`${ICON_SIDEBAR_PATH}/${icon}.svg`} />
                    }
                    <p>{name}</p>
                  </NavLink>
                </li>
              ))

            }
            <li>
              <button className="sidebar-option">
                <img src={`${ICON_SIDEBAR_PATH}/oscuro-icon.svg`} />
                <p>Modo oscuro</p>
              </button>
            </li>
          </ul>
        </section>
      </nav>
    </aside>
  );
};