import type { THEME_TYPE } from "@/shared/constants/localStorage";

export interface IThemeContext {
  theme: THEME_TYPE;
  toggleTheme: () => void;
}
