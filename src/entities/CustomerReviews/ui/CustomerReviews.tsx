import { Section } from "@/shared/ui/Section";
import { memo } from "react";
import { TextBlock } from "@/shared/ui/TextBlock";
import { Flex } from "@/shared/ui/Flex";
import { Title } from "@/shared/ui/Title";
import { Desc } from "@/shared/ui/Desc";
import styles from "./CustomerReviews.module.scss";

function CustomerReviews() {
  return (
    <Section>
      <div className="container">
        <TextBlock
          title="Отзывы клиентов"
          desc="Что говорят о нас наши партнеры"
        />

        <div className={styles.topItems}>
          <Flex gap={20} addClass={styles.flex}>
            <Flex
              flexDirection="column"
              gap={10}
              align="center"
              justify="center"
              addClass={styles.item}
            >
              <Title level={2}>50+</Title>
              <Desc>Довольных клиентов</Desc>
            </Flex>
            <Flex
              flexDirection="column"
              gap={10}
              align="center"
              justify="center"
              addClass={styles.item}
            >
              <Title level={2}>98%</Title>
              <Desc>Положительных отзывов</Desc>
            </Flex>
            <Flex
              flexDirection="column"
              gap={10}
              align="center"
              justify="center"
              addClass={styles.item}
            >
              <Title level={2}>24/7</Title>
              <Desc>Поддержка клиентов</Desc>
            </Flex>
          </Flex>
        </div>
      </div>
    </Section>
  );
}

export default memo(CustomerReviews);
