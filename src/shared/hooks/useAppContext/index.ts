import {
  ThemeContext,
  type IThemeContext,
} from "@/app/Providers/ThemeProvider";
import { useContext } from "react";

export function useAppContext(): IThemeContext {
  return useContext(ThemeContext);
}
