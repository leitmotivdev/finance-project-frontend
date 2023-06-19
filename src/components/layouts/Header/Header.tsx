import './Header.scss';
import { NotificationButton } from './Notification/NotificationButton/NotificationButton';
import { UserProfile } from './UserProfile/UserProfile';

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Dashboard</h1>
      <div className="header__features">
        <NotificationButton />
        <UserProfile />
      </div>
    </header>
  );
};