import { memo, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { clsx } from "@/shared/lib/clsx";
import { routePaths } from "@/shared/config/routeConfig";
import styles from "./Header.module.scss";
import { Flex } from "@/shared/ui/Flex";
import { menuItems } from "../model/menu";
import MenuItem from "./MenuItem/MenuItem";
import { SwitchTheme } from "@/shared/ui/SwitchTheme";
import { SwitchLang } from "@/shared/ui/SwitchLang";
import { Button } from "@/shared/ui/Button";
import { useTranslation } from "react-i18next";
import { Modal } from "@/shared/ui/Modal";
import { LeaveForm } from "@/features/LeaveForm";
import { MdLocalPhone } from "react-icons/md";
import { SiTelegram } from "react-icons/si";

function Header() {
  const [modal, setModal] = useState(false);

  const openModal = useCallback(() => setModal(true), []);
  const closeModal = useCallback(() => setModal(false), []);

  const { t } = useTranslation();

  return (
    <>
      <header className={styles.header}>
        <div className={clsx(["container", styles.containerBlock])}>
          <Flex align="center" justify="space-between" gap={10}>
            <Link to={routePaths.HOME} className={styles.logoLink}>
              <img src="/logo.png" alt="logo Data business control" />
            </Link>

            <Flex gap={40}>
              {menuItems.map((item) => (
                <MenuItem item={item} key={item.name} />
              ))}
            </Flex>

            <Flex gap={15} align="center">
              <a href="tel:+998999560427" className={styles.link}>
                <MdLocalPhone className={styles.link} /> +998 99 956 04 27
              </a>
              <a
                href="https://web.telegram.org/a/#688517356"
                target="_blank"
                className={styles.link}
              >
                <SiTelegram className={styles.link} />
              </a>
              <SwitchLang />
              <Button
                type_btn="default"
                addClass={styles.headerBtn}
                onClick={openModal}
              >
                {t("Оставить заявку")}
              </Button>
              <SwitchTheme />
            </Flex>
          </Flex>
        </div>
      </header>

      <Modal
        open={modal}
        onClose={closeModal}
        lazy
        title={t("Оставить заявку")}
      >
        <LeaveForm />
      </Modal>
    </>
  );
}

export default memo(Header);
