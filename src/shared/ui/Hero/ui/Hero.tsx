import { memo, useCallback, useState } from "react";
import styles from "./Hero.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "../../Button";
import { Modal } from "../../Modal";
import { LeaveForm } from "@/features/LeaveForm";
import { Title } from "../../Title";
import { Desc } from "../../Desc";

interface IProps {
  title: string;
  desc: string;
}

function Hero({ desc, title }: IProps) {
  const [modal, setModal] = useState(false);

  const openModal = useCallback(() => setModal(true), []);
  const closeModal = useCallback(() => setModal(false), []);

  const { t } = useTranslation();

  return (
    <>
      <div className={styles.block}>
        <div className={styles.titleBlock}>
          <Title addClass={styles.title}>{title}</Title>
        </div>
        <Desc addClass={styles.desc}>{desc}</Desc>

        <Button type_btn="primary" onClick={openModal} addClass={styles.btn}>
          Свяжитесь с нами сейчас
        </Button>
      </div>

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

export default memo(Hero);
