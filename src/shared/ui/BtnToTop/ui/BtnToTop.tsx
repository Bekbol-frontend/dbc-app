import { memo, useCallback, useEffect, useState } from "react";
import styles from "./BtnToTop.module.scss";
import { Button } from "../../Button";
import { Portal } from "../../Portal";
import { FaChevronUp } from "react-icons/fa";
import { clsx } from "@/shared/lib/clsx";
import { useThrottle } from "@/shared/hooks/useThrottle";

function BtnToTop() {
  const [show, setShow] = useState(false);

  const onScroll = useCallback(() => {
    const result = window.scrollY >= 700;
    setShow((prev) => (prev !== result ? result : prev));
  }, []);

  const throttleCallback = useThrottle(onScroll, 150);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", throttleCallback);

    return () => {
      window.removeEventListener("scroll", throttleCallback);
    };
  }, [throttleCallback, onScroll]);

  const onClickBtnToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Portal>
      <Button
        addClass={clsx([styles.btnToTop], {
          [styles.show]: show,
        })}
        onClick={onClickBtnToTop}
        type_btn="primary"
      >
        <FaChevronUp />
      </Button>
    </Portal>
  );
}

export default memo(BtnToTop);
