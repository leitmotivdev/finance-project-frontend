import './NotificationModal.scss';
import NotificationItem from '../NotificationItem/NotificationItem';

const NotificationModal = () => {
  return (
    <div className="notifications-modal">
      <p className="notifications-modal__title">Notificaciones</p>
      <div className="notifications-modal__container">
        <NotificationItem
          content="Tu contraseña ha sido correctamente actualizada para el evento."
          date="Jul 19, 2023 06:12 pm"
        />
        <NotificationItem
          content="Tu contraseña ha sido correctamente actualizada para el evento."
          date="Jul 19, 2023 06:12 pm"
        />
        <NotificationItem
          content="Aun no has verificado tu cuenta, ingresa a tu correo ya!"
          date="Jul 19, 2023 06:12 pm"
        />
      </div>
      <p className="notifications-modal__seemore">
        Ver todas las notificaiones
      </p>
    </div>
  );
};

export default NotificationModal;
