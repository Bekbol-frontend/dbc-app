import { clsx } from "@/shared/lib/clsx";
import styles from "./Flex.module.scss";
import { useMemo, type HTMLAttributes } from "react";

type Align = "center" | "flex-start" | "flex-end";
type Justify =
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

type FlexDirection = "row" | "column";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  addClass?: string;
  align?: Align;
  justify?: Justify;
  flexDirection?: FlexDirection;
  gap?: number;
}

function Flex(props: IProps) {
  const {
    children,
    addClass = "",
    align = "flex-start",
    justify = "flex-start",
    flexDirection = "row",
    gap,
    ...otherProps
  } = props;

  const style: React.CSSProperties = useMemo(
    () => ({
      alignItems: align,
      justifyContent: justify,
      flexDirection,
      gap,
    }),
    [align, justify, gap, flexDirection]
  );

  return (
    <div
      style={style}
      className={clsx([styles.flex, addClass])}
      {...otherProps}
    >
      {children}
    </div>
  );
}

export default Flex;
