import { clsx } from "@/shared/lib/clsx";
import type { ReactNode } from "react";
import styles from "./Desc.module.scss";

interface IProps {
  children: ReactNode;
  addClass?: string;
}

function Desc({ children, addClass = "" }: IProps) {
  return <p className={clsx([styles.desc, addClass])}>{children}</p>;
}

export default Desc;
