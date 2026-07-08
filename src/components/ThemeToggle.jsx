import { useTheme } from "../context/ThemeContext";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

const ThemeToggle = ({ className = "" }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className={`flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-300 bg-white/80 text-neutral-600 transition-all hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:text-neutral-200 ${className}`}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
            {theme === "dark" ? <HiOutlineSun className="text-lg" /> : <HiOutlineMoon className="text-lg" />}
        </button>
    );
};

export default ThemeToggle;
