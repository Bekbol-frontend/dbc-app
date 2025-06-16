import { Flex } from "@/shared/ui/Flex";
import { memo } from "react";
import styles from "./MenuModal.module.scss";
import { menuItems } from "../../model/menu";
import MenuItem from "../MenuItem/MenuItem";

function MenuModal() {
  return (
    <Flex gap={20} className={styles.menuLinks} flexDirection="column">
      {menuItems.map((item) => (
        <MenuItem item={item} key={item.name} addClass={styles.menuLink} />
      ))}
    </Flex>
  );
}

export default memo(MenuModal);
