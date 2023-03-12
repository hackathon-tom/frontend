import React from "react";
import { ApplicationContext } from "../../../contexts/ApplicationContext";
import OpacityButton from "../OpacityButton";

const languages = {
    "en": "🇺🇸 English",
    "fr": "🇫🇷 Français",
    "ar": "🇩🇿 Arabe"
}

const LanguagePicker = () => {

    const context = React.useContext(ApplicationContext);

    const [isLoading, setIsLoading] = React.useState(true);

    React.useState(() => {
        console.log(context);
        //setIsLoading(context.content.loading);
    }, []);

    const setLanguage = (language) => {
        context.setLanguage(language);
        console.log("click")
    }

    if (!isLoading) return (
        <OpacityButton>
            <div>loading..</div>
        </OpacityButton>
    )

    return (
            <select id="khayar" defaultValue={context.content.language} onChange={(event) => setLanguage(event.target.value)}>
                {Object.keys(languages).map((language) => {
                    return (
                        <option key={language} value={language}>{languages[language]}</option>
                    )
                })}
            </select>
    )
}

export default LanguagePicker;