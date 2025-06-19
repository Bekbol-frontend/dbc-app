import { memo } from "react";
import { Section } from "@/shared/ui/Section";
import { Title } from "@/shared/ui/Title";
import { Desc } from "@/shared/ui/Desc";
import { Flex } from "@/shared/ui/Flex";
import { ourServicesItems } from "../model/items";
import styles from "./OurServices.module.scss";
import { CardInfoItem } from "@/shared/ui/CardInfoItem";

function OurServices() {
  return (
    <Section>
      <div className="container">
        <div>
          <Flex
            flexDirection="column"
            gap={10}
            align="center"
            addClass={styles.textBlock}
          >
            <Title>Наши услуги</Title>
            <Desc>Комплексные решения для автоматизации вашего бизнеса</Desc>
          </Flex>

          <div className={styles.cards}>
            {ourServicesItems.map((card) => (
              <CardInfoItem key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default memo(OurServices);
