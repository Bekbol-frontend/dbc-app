import { useCallback, useEffect, useState, type ReactNode } from "react";
import styles from "./Modal.module.scss";
import { clsx, type MODS_CLSX } from "@/shared/lib/clsx";
import { Portal } from "../../Portal";
import { Button } from "../../Button";
import { MdClose } from "react-icons/md";
import { Flex } from "../../Flex";

const TIMEOUT = 100;

interface IProps {
  children: ReactNode;
  addClass?: string;
  open: boolean;
  onClose: () => void;
  lazy?: boolean;
  title?: string;
}

function Modal(props: IProps) {
  const { children, addClass = "", open, onClose, title } = props;
  const [delay, setDelay] = useState(false);

  const closeModal = useCallback(() => {
    setDelay(false);
    setTimeout(() => {
      onClose();
    }, TIMEOUT);
  }, [onClose]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (open) {
      window.addEventListener("keyup", onKeyUp);
      timer = setTimeout(() => setDelay(true), TIMEOUT);
    }

    return () => {
      window.removeEventListener("keyup", onKeyUp);
      setDelay(false);
      clearTimeout(timer);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const mods: MODS_CLSX = {
    [styles.show]: delay,
  };

  if (props.lazy && !open) return null;

  return (
    <Portal content={document.getElementById("modal-wrapper")!}>
      <div
        className={clsx([styles.modal, addClass], mods)}
        onClick={closeModal}
      >
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
          <div className={styles.modalHeader}>
            <Flex align="center" gap={5} justify="space-between">
              <h3>{title}</h3>
              <Button
                type_btn="text"
                addClass={styles.closeBtn}
                onClick={closeModal}
              >
                <MdClose className={styles.closeBtnIcon} />
              </Button>
            </Flex>
          </div>
          <div className={styles.modalBody}>{children}</div>
        </div>
      </div>
    </Portal>
  );
}

export default Modal;
