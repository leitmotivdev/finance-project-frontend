import './NotificationButton.scss';
import { notificationIcon } from '../../../../../constants/assets/headerAssets';

import { useEffect, useRef, useState } from 'react';
import NotificationModal from '../NotificationModal/NotificationModal';

export const NotificationButton = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const showModalNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const clickOutside = (e: Event) => {
    const target = e.target as Node;
    if (target && !headerRef.current?.contains(target)) {
      setShowNotifications(false);
    }
  };

  useEffect(() => {
    if (showNotifications) {
      document.addEventListener('mousedown', clickOutside);
    } else {
      document.removeEventListener('mousedown', clickOutside);
    }

    return () => document.removeEventListener('mousedown', clickOutside);
  }, [showNotifications]);

  return (
    <div className="notification-button" ref={headerRef}>
      <button onClick={showModalNotifications}>
        <div className="notification-button__number">3</div>
        <img
          src={notificationIcon}
          alt="Icono de notificación"
        />
        {showNotifications && <NotificationModal />}
      </button>
    </div>
  );
};