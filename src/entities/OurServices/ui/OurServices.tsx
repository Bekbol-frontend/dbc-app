import { memo } from "react";
import { Section } from "@/shared/ui/Section";
import { ourServicesItems } from "../model/items";
import styles from "./OurServices.module.scss";
import { CardInfoItem } from "@/shared/ui/CardInfoItem";
import { TextBlock } from "@/shared/ui/TextBlock";

function OurServices() {
  return (
    <Section>
      <div className="container">
        <TextBlock
          title="Наши услуги"
          desc="Комплексные решения для автоматизации вашего бизнеса"
        />

        <div className={styles.cards}>
          {ourServicesItems.map((card) => (
            <CardInfoItem key={card.id} card={card} />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default memo(OurServices);
