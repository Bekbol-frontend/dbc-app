import { Desc } from "@/shared/ui/Desc";
import { Flex } from "@/shared/ui/Flex";
import { Section } from "@/shared/ui/Section";
import { Title } from "@/shared/ui/Title";
import { memo } from "react";
import styles from "./SuccessfulCases.module.scss";
import { successfulItems } from "../model/items";
import { CardInfoItem } from "@/shared/ui/CardInfoItem";
import { Card } from "@/shared/ui/Card";
import { Button } from "@/shared/ui/Button";

function SuccessfulCases() {
  return (
    <Section>
      <div className="container">
        <Flex
          flexDirection="column"
          gap={10}
          align="center"
          addClass={styles.textBlock}
        >
          <Title>Успешные Кейсы</Title>
          <Desc>Реальные результаты наших клиентов</Desc>
        </Flex>

        <div className={styles.cards}>
          {successfulItems.map((card) => (
            <CardInfoItem key={card.id} card={card} />
          ))}
        </div>

        <div>
          <Card addClass={styles.bottomCard}>
            <Flex flexDirection="column" gap={20} align="center" justify="center">
              <Title level={2}>Готовы автоматизировать свой бизнес?</Title>
              <Desc>
                Получите бесплатную консультацию и узнайте, как мы можем помочь
                вашей компании
              </Desc>
              <Button type_btn="primary">Оставить заявку</Button>
            </Flex>
          </Card>
        </div>
      </div>
    </Section>
  );
}

export default memo(SuccessfulCases);
