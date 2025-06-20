import { routePaths } from "@/shared/config/routeConfig";
import { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";

function Logo() {
  return (
    <Link to={routePaths.HOME} className={styles.logoLink}>
      <img src="/logo.png" alt="logo Data business control" />
    </Link>
  );
}

export default memo(Logo);
