import { memo } from "react";
import { Section } from "@/shared/ui/Section";
import { Title } from "@/shared/ui/Title";
import { advantageItems } from "../model/types";
import styles from "./Advantages.module.scss";
import { useTranslation } from "react-i18next";
import { CardInfoItem } from "@/shared/ui/CardInfoItem";

function Advantages() {
  const { t } = useTranslation();

  return (
    <Section>
      <div className="container">
        <div>
          <Title addClass={styles.title} level={2}>
            {t("Наши преимущества")}
          </Title>

          <div className={styles.gridBlock}>
            {advantageItems.map((card) => (
              <CardInfoItem card={card} key={card.id} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default memo(Advantages);
