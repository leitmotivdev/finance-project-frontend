import './Header.scss';
import { useLocation } from 'react-router-dom';
import { UserProfile } from './UserProfile/UserProfile';
import { NotificationButton } from './Notification/NotificationButton/NotificationButton';
import { useEffect, useState } from 'react';
import { findRoute } from '../../../routes/routes';

export const Header = () => {
  const [routeName, setRouteName] = useState('');

  const location = useLocation();

  useEffect(() => {
    const route = findRoute(location.pathname);
    setRouteName(route.name);
  }, [location.pathname]);

  return (
    <header className="header">
      <h1 className="header__title">{routeName}</h1>
      <div className="header__features">
        <NotificationButton />
        <UserProfile />
      </div>
    </header>
  );
};