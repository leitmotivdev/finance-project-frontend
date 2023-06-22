import './UserProfile.scss';
import { useAuth0 } from '@auth0/auth0-react';
import { arrowIcon, profile } from '../../../../constants/assets/headerAssets';

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

  console.log('isAuthenticated', isAuthenticated);

  return (
    <div className="user-profile">
      <button onClick={logoutWithRedirect}>Log out</button>
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
        <button>
          <img
            src={arrowIcon}
            alt="arrow-user-icon"
          />
        </button>
      </div>
    </div>
  );
};