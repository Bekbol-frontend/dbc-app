import { memo, useCallback, useState } from "react";
import { clsx } from "@/shared/lib/clsx";
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
import { IoMenuOutline } from "react-icons/io5";
import MenuModal from "./MenuModal/MenuModal";
import { Logo } from "@/shared/ui/Logo";

function Header() {
  const [modal, setModal] = useState(false);
  const [modalMenu, setModalMenu] = useState(false);

  const openModal = useCallback(() => setModal(true), []);
  const closeModal = useCallback(() => setModal(false), []);

  const openModalMenu = useCallback(() => setModalMenu(true), []);
  const closeModalMenu = useCallback(() => setModalMenu(false), []);

  const { t } = useTranslation();

  return (
    <>
      <header className={styles.header}>
        <div className={clsx(["container", styles.containerBlock])}>
          <Flex align="center" justify="space-between" gap={10}>
            <Logo />
            <Flex gap={20} className={styles.menuLinks}>
              {menuItems.map((item) => (
                <MenuItem item={item} key={item.name} />
              ))}
            </Flex>

            <Flex gap={15} align="center">
              <a href="tel:+998999560427" className={styles.link}>
                <MdLocalPhone className={styles.iconTel} /> +998 99 956 04 27
              </a>
              <a
                href="https://t.me/shariyardev"
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
              <Button
                type_btn="default"
                addClass={styles.menuBtn}
                onClick={openModalMenu}
              >
                <IoMenuOutline className={styles.menuIcon} />
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

      <Modal open={modalMenu} onClose={closeModalMenu} lazy title={t("Меню")}>
        <MenuModal onClose={closeModalMenu}/>
      </Modal>
    </>
  );
}

export default memo(Header);
