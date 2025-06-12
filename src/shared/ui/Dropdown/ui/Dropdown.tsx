import { memo, useCallback, useRef, useState } from "react";
import { GrDown } from "react-icons/gr";
import { Flex } from "../../Flex";
import styles from "./Dropdown.module.scss";
import { clsx } from "@/shared/lib/clsx";
import type { IDropdownItem } from "../model/types";
import type { IconType } from "react-icons";
import { useOutside } from "@/shared/hooks/useOutside";

interface IProps {
  addClass?: string;
  items: IDropdownItem[];
  value: string;
  Icon?: IconType;
  onSelect?: (code: string) => void;
}

function Dropdown(props: IProps) {
  const { items, addClass = "", Icon, onSelect, value } = props;

  const [show, setShow] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleShow = useCallback(() => setShow((prev) => !prev), []);

  useOutside({
    ref: dropdownRef,
    setShow,
  });

  return (
    <div className={clsx([styles.dropdown, addClass])} ref={dropdownRef}>
      <Flex
        align="center"
        gap={4}
        justify="space-between"
        addClass={styles.top}
        onClick={toggleShow}
      >
        <Flex align="center" gap={10}>
          {Icon && <Icon className={styles.icon} />}
          <span className={styles.selectText}>{value}</span>
        </Flex>
        <GrDown className={styles.icon} />
      </Flex>
      <Flex
        addClass={clsx([styles.bottom], { [styles.show]: show })}
        flexDirection="column"
        gap={5}
      >
        {items.map((lang) => (
          <span
            key={lang.code}
            onClick={() => {
              onSelect?.(lang.code);
              setShow(false);
            }}
          >
            {lang.name}
          </span>
        ))}
      </Flex>
    </div>
  );
}

export default memo(Dropdown);
