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

function Header() {
  const [modal, setModal] = useState(false);

  const openModal = useCallback(() => setModal(true), []);
  const closeModal = useCallback(() => setModal(false), []);

  const { t } = useTranslation();

  return (
    <>
      <header className={styles.header}>
        <div className={clsx(["container", styles.containerBlock])}>
          <Flex align="center" justify="space-between">
            <Link to={routePaths.HOME} className={styles.logoLink}>
              <img src="/logo.png" alt="logo Data business control" />
            </Link>

            <Flex gap={40}>
              {menuItems.map((item) => (
                <MenuItem item={item} key={item.name} />
              ))}
            </Flex>

            <Flex gap={10} align="center">
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

      <Modal open={modal} onClose={closeModal} lazy>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          natus laborum corporis veniam alias facere, voluptatem nostrum iste
          veritatis perspiciatis reprehenderit error delectus assumenda fugit
          voluptatum illum esse suscipit quod vel maiores. Pariatur, nesciunt
          explicabo. Nam porro qui corrupti nemo, tenetur et quam incidunt sit
          magnam eveniet optio eaque suscipit.
        </p>
      </Modal>
    </>
  );
}

export default memo(Header);
