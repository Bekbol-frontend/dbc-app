import { memo } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Button } from "../../Button";
import styles from "./SwitchTheme.module.scss";
import { useAppContext } from "@/shared/hooks/useAppContext";

function SwitchTheme() {
  const { theme, toggleTheme } = useAppContext();

  return (
    <Button addClass={styles.siwthThemeBtn} onClick={toggleTheme}>
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </Button>
  );
}

export default memo(SwitchTheme);
