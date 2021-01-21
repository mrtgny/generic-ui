import React from 'react';
import 'rc-notification/assets/index.css';
import Notification from 'rc-notification';
import ListItem from "../ListItem";

let notification = null
Notification.newInstance({
    style: {
        right: 32,
        top: 32
    },
}, _notification => {
    notification = _notification
});

const notificationColors = {
    success: 'green',
    error: 'red',
    warning: 'orange',
    info: 'blue',
}

const NotificationRenderer = props => {
    const {type, title, message, icon} = props;
    const color = notificationColors[type]
    return (
        <ListItem style={{borderLeft: `5px solid ${color}`, minWidth: 250, padding: 8}}
                  avatar={icon}
                  avatarContainerStyle={{
                      color: notificationColors[type],
                      fontSize: 20,
                      marginRight: 4
                  }}
                  titleStyle={{fontWeight: 'bold'}}
                  title={title}>
            <p style={{marginLeft: 28, fontSize: 12}}>
                {message}
            </p>
        </ListItem>
    )
}

export const notificationPusher = props => {
    const {duration, title, message, icon, type, ...rest} = props;
    notification.notice({
        duration: duration || 5,
        content: <NotificationRenderer title={title}
                                       message={message}
                                       type={type}
                                       icon={icon}/>,
        style: {padding: 0},
        ...rest
    })
}

notification.success = props => {
    notificationPusher({...props, type: "success"})
}
notification.error = props => {
    notificationPusher({...props, type: "error"})
}
notification.warning = props => {
    notificationPusher({...props, type: "warning"})
}
notification.info = props => {
    notificationPusher({...props, type: "info"})
}

export default notification;
