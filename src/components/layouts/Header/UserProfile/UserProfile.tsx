import './UserProfile.scss';
import { useAuth0 } from '@auth0/auth0-react';
import { arrowIcon } from '../../../../constants/assets/headerAssets';

export const UserProfile = () => {
  const {
    user,
    isAuthenticated,
    logout,
  } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      }
    });

  return (
    <div className="user-profile">
      <div className="user__icon">
        <img
          src={user?.picture}
          alt="profile-icon"
        />
      </div>
      <div className="user__range">
        <h2>{isAuthenticated ? user?.name : 'Edgar Salas'}</h2>
        <p> Administrador</p>
      </div>

      <div className="user__arrow-icon">
        <button onClick={logoutWithRedirect}>
          <img
            src={arrowIcon}
            alt="arrow-user-icon"
          />
        </button>
      </div>
    </div>
  );
};