import UserInterface from "../interfaces/UserInterface";

export enum Language {
  FR = "FR",
  EN = "EN",
  AR = "AR",
}

export enum Theme {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

export interface NotificationInterface {
  id: string;
  title: string;
  description: string;
}

export interface ApplicationContextContentInterface {
  user: UserInterface | null;
  language: Language;
  theme: Theme;
  loading: boolean;
  notifications: NotificationInterface[];
}

export interface ApplicationContextInterface {
  content: ApplicationContextContentInterface;
  setUser: (user: UserInterface) => void;
  setLanguage: (language: Language) => void;
  setTheme: (theme: Theme) => void;
  setLoading: (loading: boolean) => void;
  pushNotification: (notification: NotificationInterface) => void;
  popNotification: (notificationId: NotificationInterface["id"]) => void;
}
