import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ThemeContext } from "../model/config";
import { THEME_KEY, type THEME_TYPE } from "@/shared/constants/localStorage";

function getLocalStorageTheme(): THEME_TYPE {
  const theme = localStorage.getItem(THEME_KEY);
  return theme ? (theme as THEME_TYPE) : "light";
}

interface IProps {
  children: ReactNode;
}

function ThemeProvider({ children }: IProps) {
  const [theme, setTheme] = useState(() => getLocalStorageTheme());

  const toggleTheme = useCallback(() => {
    console.log("Render toggleTheme");

    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const values = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
