import { memo } from "react";
import styles from "./Footer.module.scss";
import { Flex } from "@/shared/ui/Flex";
import { Logo } from "@/shared/ui/Logo";
import { Desc } from "@/shared/ui/Desc";
import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiTelegram,
  SiWhatsapp,
} from "react-icons/si";
import { Title } from "@/shared/ui/Title";
import { MdLocalPhone, MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <Flex addClass={styles["main-flex"]} gap={20}>
          <Flex addClass={styles["flex-1"]} flexDirection="column" gap={20}>
            <Logo />
            <Desc>
              Цифровые решения для вашего бизнеса. Автоматизация, которая
              работает.
            </Desc>
            <Flex gap={10}>
              <a
                href="https://t.me/@shariyardev"
                target="_blank"
                className={styles.link}
              >
                <SiInstagram />
              </a>
              <a
                href="https://t.me/@shariyardev"
                target="_blank"
                className={styles.link}
              >
                <SiTelegram />
              </a>
              <a
                href="https://t.me/@shariyardev"
                target="_blank"
                className={styles.link}
              >
                <SiWhatsapp />
              </a>
              <a
                href="https://t.me/@shariyardev"
                target="_blank"
                className={styles.link}
              >
                <SiFacebook />
              </a>
              <a
                href="https://t.me/@shariyardev"
                target="_blank"
                className={styles.link}
              >
                <SiLinkedin />
              </a>
            </Flex>
          </Flex>
          <Flex addClass={styles["flex-2"]} flexDirection="column" gap={20}>
            <Title level={5}>Контакты</Title>
            <Flex flexDirection="column" gap={13}>
              <Flex align="center" gap={5}>
                <IoLocationOutline className={styles.link} />
                <Desc>г. Алматы, ул. Абая 150/230, БЦ "Esentai Tower"</Desc>
              </Flex>
              <Flex align="center" gap={5}>
                <MdLocalPhone className={styles.link} />
                <Desc>+998 99 956 04 27</Desc>
              </Flex>
              <Flex align="center" gap={5}>
                <MdOutlineMailOutline className={styles.link} />
                <Desc>info@dbc.kz</Desc>
              </Flex>
            </Flex>
          </Flex>
          <Flex addClass={styles["flex-3"]} flexDirection="column" gap={20}>
            <Title level={5}>Услуги</Title>

            <Flex flexDirection="column" gap={13}>
              <Desc>CRM-системы</Desc>
              <Desc>ERP автоматизация</Desc>
              <Desc>POS-системы</Desc>
              <Desc>Телеграм-боты</Desc>
              <Desc>Системы учёта</Desc>
            </Flex>
          </Flex>
        </Flex>

        <div className={styles.footerBottom}>
          <Desc>© {year} DBC. Все права защищены.</Desc>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
