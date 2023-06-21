import { arrowIcon, profile } from '../../../../constants/assets/headerAssets';
import './UserProfile.scss';

export const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="user__icon">
        <img
          src={profile}
          alt="profile-icon"
        />
      </div>

      <div className="user__range">
        <h2>Edgar Salas</h2>
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