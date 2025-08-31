import { useEffect, useState } from "react";

export const useTheme = () => {
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem("discipline-theme");
        if (saved === "dark") return true;
        if (saved === "light") return false;
        // 默认跟随系统
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    useEffect(() => {
        // 保存到 localStorage
        localStorage.setItem("discipline-theme", isDark ? "dark" : "light");

        // 应用到 DOM
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDark]);

    return { isDark, toggleTheme };
};
