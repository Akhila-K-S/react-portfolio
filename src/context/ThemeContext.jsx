import { createContext, useContext, useLayoutEffect, useState } from "react";

const ThemeContext = createContext(null);

export const getStoredTheme = () => {
    if (typeof window === "undefined") return "dark";
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const applyTheme = (theme) => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;
    localStorage.setItem("theme", theme);
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getStoredTheme);

    useLayoutEffect(() => {
        applyTheme(theme);
    }, [theme]);

    const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider");
    }
    return context;
};
