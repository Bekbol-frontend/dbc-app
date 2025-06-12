import { useMemo, type ButtonHTMLAttributes, type ReactNode } from "react";
import { clsx, type MODS_CLSX } from "@/shared/lib/clsx";
import styles from "./Button.module.scss";

type TYPE_BTN = "primary" | "default" | "text";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  addClass?: string;
  type_btn?: TYPE_BTN;
}

function Button(props: IProps) {
  const {
    children,
    addClass = "",
    type_btn = "default",
    ...otherProps
  } = props;

  const mods: MODS_CLSX = useMemo(
    () => ({ [styles[type_btn]]: true }),
    [type_btn]
  );

  return (
    <button {...otherProps} className={clsx([styles.btn, addClass], mods)}>
      {children}
    </button>
  );
}

export default Button;
