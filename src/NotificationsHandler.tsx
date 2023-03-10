import React from "react";
import ReactDOM from "react-dom";
import { ApplicationContext } from "./context/ApplicationContext";
import Modal from "./Modal";

const NotificationsHandler = () => {
  const context = React.useContext(ApplicationContext)!;

  const modals = document.getElementById("modals") as HTMLDivElement;

  return ReactDOM.createPortal(
    <>
      {context.content.notifications.length > 0 ? (
        <div className="backdrop absolute top-0 bottom-0 bg-[rgba(0,0,0,0.5)] w-screen h-screen">
          overlay / backdrop / background
        </div>
      ) : null}
      <div className="content">
        {context.content.notifications.map((notification) => {
          return (
            <div
              key={notification.id}
              onClick={context.popNotification.bind(null, notification.id)}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <Modal>{notification.title}</Modal>
            </div>
          );
        })}
      </div>
    </>,
    modals
  );
};

export default NotificationsHandler;
