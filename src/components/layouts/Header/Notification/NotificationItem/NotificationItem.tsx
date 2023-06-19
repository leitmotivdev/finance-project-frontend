import React from 'react';

import './NotificationItem.scss';
import { circleBlue } from '../../../../../constants/headerAssets';

export interface NotificationItemProps {
  content: string;
  date: string;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  content,
  date,
}) => {
  return (
    <div className="notification-item">
      <img
        src={circleBlue}
        className="notification-item__icon"
      />
      <div>
        <p className="notification-item__message">{content}</p>
        <span className="notification-item__date">{date}</span>
      </div>
    </div>
  );
};

export default NotificationItem;
