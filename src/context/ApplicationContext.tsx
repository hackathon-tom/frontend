import React, { createContext } from "react";
import getCurrentUser from "../api/getCurrentUser";
import UserInterface from "../interfaces/UserInterface";
import {
  ApplicationContextContentInterface,
  NotificationInterface,
  Language,
  Theme,
  ApplicationContextInterface,
} from "./ApplicationContextInterface";

export const ApplicationContext = createContext<
  ApplicationContextInterface | undefined
>(undefined);

interface ContextWrapperProps {
  children: JSX.Element;
}

export const ContextWrapper = ({ children }: ContextWrapperProps) => {
  /**set the stuff correctly and states */
  /**wrapp the given component */

  const [content, setContent] =
    React.useState<ApplicationContextContentInterface>({
      user: null,
      language: Language.FR,
      theme: Theme.LIGHT,
      loading: true,
      notifications: [],
    });

  const setUser = (user: UserInterface) => {
    setContent((content) => ({ ...content, user }));
  };

  const setLanguage = (language: Language) => {
    setContent((content) => ({ ...content, language }));
  };

  const setTheme = (theme: Theme) => {
    setContent((content) => ({ ...content, theme }));
  };

  const setLoading = (loading: boolean) => {
    setContent((content) => ({ ...content, loading }));
  };

  const pushNotification = (notification: NotificationInterface) => {
    /**make a deep copy of content.notifications or just a simple copy ? or no copy att all and let the same array ? what is the best */
    setContent((content) => ({
      ...content,
      notifications: [...content.notifications, notification],
    }));
  };

  const popNotification = (notificationId: NotificationInterface["id"]) => {
    const notifications = [...content.notifications];
    const notificationIndex = notifications.findIndex(
      (notification) => notification.id === notificationId
    );
    if (notificationIndex === -1)
      return console.log(
        "[notifications]:",
        "no notification with this id to pop"
      );
    notifications.splice(notificationIndex, 1);
    setContent((content) => ({ ...content, notifications }));
  };

  React.useEffect(() => {
    setLoading(true);
    getCurrentUser()
      .then(setUser)
      .catch((err) => {
        console.log("failed to auth the user");
      })
      .finally(() => setLoading(false));
  }, []);

  const context: ApplicationContextInterface = {
    content,
    setUser,
    setLanguage,
    setTheme,
    setLoading,
    pushNotification,
    popNotification,
  };

  return (
    <ApplicationContext.Provider value={context}>
      {children}
    </ApplicationContext.Provider>
  );
};
