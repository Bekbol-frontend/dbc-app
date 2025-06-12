import { memo } from "react";
import type { IMenuItem } from "../../model/types";
import { NavLink } from "react-router-dom";
import styles from "./MenuItem.module.scss";
import { clsx } from "@/shared/lib/clsx";
import { useTranslation } from "react-i18next";

interface IProps {
  item: IMenuItem;
  addClass?: string;
}

function MenuItem({ item, addClass = "" }: IProps) {
  const { name, path } = item;

  const { t } = useTranslation();

  return (
    <NavLink to={path} className={clsx([styles.item, addClass])}>
      {t(name)}
    </NavLink>
  );
}

export default memo(MenuItem);
