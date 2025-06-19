import { memo } from "react";
import { Section } from "@/shared/ui/Section";
import styles from "./SuccessfulCases.module.scss";
import { successfulItems } from "../model/items";
import { CardInfoItem } from "@/shared/ui/CardInfoItem";

import { CardConsultation } from "@/shared/ui/CardConsultation";
import { TextBlock } from "@/shared/ui/TextBlock";

function SuccessfulCases() {
  return (
    <Section>
      <div className="container">
        <TextBlock
          title="Успешные Кейсы"
          desc="Реальные результаты наших клиентов"
        />

        <div className={styles.cards}>
          {successfulItems.map((card) => (
            <CardInfoItem key={card.id} card={card} />
          ))}
        </div>
        <CardConsultation
          title="Готовы автоматизировать свой бизнес?"
          desc="Получите бесплатную консультацию и узнайте, как мы можем
                  помочь вашей компании"
          btnText="Оставить заявку"
        />
      </div>
    </Section>
  );
}

export default memo(SuccessfulCases);
