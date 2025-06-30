import { memo, useCallback } from "react";
import type { IMenuItem } from "../../model/types";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./MenuItem.module.scss";
import { clsx } from "@/shared/lib/clsx";
import { useTranslation } from "react-i18next";

interface IProps {
  item: IMenuItem;
  addClass?: string;
  onClose?: () => void;
}

function MenuItem({ item, addClass = "", onClose }: IProps) {
  const { name, path } = item;

  const { pathname } = useLocation();

  const { t } = useTranslation();

  const onClickLink = useCallback(() => {
    if (path === pathname) return;

    if (onClose) {
      onClose();
      window.scrollTo(0, 0);
    }
  }, [onClose, pathname, path]);

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        clsx([styles.item, addClass], {
          [styles.active]: isActive,
        })
      }
      onClick={onClickLink}
    >
      {t(name)}
    </NavLink>
  );
}

export default memo(MenuItem);
