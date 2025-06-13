import type { ReactNode } from "react";
import styles from "./Section.module.scss";
import { clsx } from "@/shared/lib/clsx";

interface IProps {
  children: ReactNode;
  addClass?: string;
}

function Section(props: IProps) {
  const { children, addClass = "" } = props;

  return (
    <section className={clsx([styles.section, addClass])}>{children}</section>
  );
}

export default Section;
