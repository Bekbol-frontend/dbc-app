import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { clsx } from "@/shared/lib/clsx";
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

  return (
    <button
      {...otherProps}
      className={clsx([styles.btn, addClass], { [styles[type_btn]]: true })}
    >
      {children}
    </button>
  );
}

export default Button;
