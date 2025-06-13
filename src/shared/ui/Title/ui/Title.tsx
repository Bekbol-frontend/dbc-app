import { memo, type ReactNode } from "react";
import styles from "./Title.module.scss";
import { clsx } from "@/shared/lib/clsx";

interface IProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  addClass?: string;
}

function Title(props: IProps) {
  const { children, level = 1, addClass = "" } = props;

  if (level === 1)
    return <h1 className={clsx([styles.title, addClass])}>{children}</h1>;
  if (level === 2)
    return <h2 className={clsx([styles.title, addClass])}>{children}</h2>;
  if (level === 3)
    return <h3 className={clsx([styles.title, addClass])}>{children}</h3>;
  if (level === 4)
    return <h4 className={clsx([styles.title, addClass])}>{children}</h4>;
  if (level === 5)
    return <h5 className={clsx([styles.title, addClass])}>{children}</h5>;

  return <h6 className={clsx([styles.title, addClass])}>{children}</h6>;
}

export default memo(Title);
