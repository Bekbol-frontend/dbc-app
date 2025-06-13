import type { ReactNode } from "react";
import styles from "./Card.module.scss";
import { clsx } from "@/shared/lib/clsx";

interface IProps {
  children: ReactNode;
  addClass?: string;
}

function Card(props: IProps) {
  const { children, addClass = "" } = props;

  return <div className={clsx([styles.card, addClass])}>{children}</div>;
}

export default Card;
