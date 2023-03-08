import React, { createContext } from "react";

export const ApplicationContext = createContext(null);

/**
 * user,
 * setUser,
 * language,
 * setLanguage,
 * theme,
 * setTheme
 */

export const ContextWrapper = ({ children }) => {
    /**set the stuff correctly and states */
    /**wrapp the given component */

    const [contextContent, setContextContent] = React.useState({
        user: null,
        language: "fr",
        theme: "light",
        loading: false,
    });

    const setUser = (user) => {
        setContextContent((content) => ({ ...content, user }));
    }


    const setLanguage = (language) => {
        setContextContent((content) => ({ ...content, language }));
    }


    const setTheme = (theme) => {
        setContextContent((content) => ({ ...content, theme }));
    }

    const setLoading = (loading) => {
        setContextContent((content) => ({ ...content, loading }));
    }

    const context = {
        content: contextContent,
        setUser,
        setLanguage,
        setTheme,
        setLoading
    }

    return (
        <ApplicationContext.Provider value={context}>
            {children}
        </ApplicationContext.Provider>
    )
}