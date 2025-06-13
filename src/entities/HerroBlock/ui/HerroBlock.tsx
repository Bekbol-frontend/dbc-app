import { memo, useCallback, useState } from "react";
import styles from "./HerroBlock.module.scss";
import { Button } from "@/shared/ui/Button";
import { Modal } from "@/shared/ui/Modal";
import { LeaveForm } from "@/features/LeaveForm";
import { useTranslation } from "react-i18next";
import { Section } from "@/shared/ui/Section";

function HerroBlock() {
  const [modal, setModal] = useState(false);

  const openModal = useCallback(() => setModal(true), []);
  const closeModal = useCallback(() => setModal(false), []);

  const { t } = useTranslation();

  return (
    <>
      <Section>
        <div className="container">
          <div className={styles.block}>
            <div className={styles.titleBlock}>
              <h1 className={styles.title}>Data Biznes Control</h1>
            </div>
            <p className={styles.desc}>
              Оптимизируем процессы, увеличиваем эффективность, уменьшаем
              расходы, Автоматизируем и систематизируем ваш бизнес.
            </p>

            <Button type_btn="primary" onClick={openModal} addClass={styles.btn}>
              Свяжитесь с нами сейчас
            </Button>
          </div>
        </div>
      </Section>

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

export default memo(HerroBlock);
