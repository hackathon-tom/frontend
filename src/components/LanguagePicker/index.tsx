import React from "react";
import { ApplicationContext } from "../../context/ApplicationContext";
import { Language } from "../../context/ApplicationContextInterface";
import LoadingLayout from "../../layouts/LoadingLayout";
import OpacityButton from "../OpacityButton/OpacityButton";

const languages = {
  [Language.EN]: "🇺🇸 English",
  [Language.FR]: "🇫🇷 Français",
  [Language.AR]: "🇩🇿 Arabe",
};

const LanguagePicker = () => {
  const context = React.useContext(ApplicationContext);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(context!.content.loading);
  }, [context]);

  const setLanguage = (language: Language) => {
    context?.setLanguage(language);
    console.log("click");
  };

  if (isLoading)
    return (
      <OpacityButton>
        <LoadingLayout />
      </OpacityButton>
    );

  return (
    <OpacityButton>
      <select
        id="khayar"
        defaultValue={context?.content.language}
        onChange={(event) => setLanguage(event.target.value as Language)}
      >
        {(Object.keys(languages) as Language[]).map((language) => {
          return (
            <option key={language} value={language}>
              {languages[language]}
            </option>
          );
        })}
      </select>
    </OpacityButton>
  );
};

export default LanguagePicker;
