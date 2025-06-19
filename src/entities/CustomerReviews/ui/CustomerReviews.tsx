import { Section } from "@/shared/ui/Section";
import { memo } from "react";
import { TextBlock } from "@/shared/ui/TextBlock";
import { Flex } from "@/shared/ui/Flex";
import { Title } from "@/shared/ui/Title";
import { Desc } from "@/shared/ui/Desc";
import styles from "./CustomerReviews.module.scss";
import { customerItems } from "../model/items";
import { Card } from "@/shared/ui/Card";
import { CardConsultation } from "@/shared/ui/CardConsultation";

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

        <div className={styles.customers}>
          {customerItems.map(
            ({ id, firstName, lastName, companyName, desc, Icon, imgUrl }) => (
              <Card key={id} addClass={styles.customerCard}>
                <Flex gap={20} flexDirection="column">
                  <Flex gap={10} flexDirection="column">
                    <Flex gap={4}>
                      {Array(5)
                        .fill("")
                        .map((_, index) => (
                          <Icon className={styles.icon} key={index} />
                        ))}
                    </Flex>
                    <Desc addClass={styles.descCompany}>{desc}</Desc>
                  </Flex>
                  <Flex align="center" gap={20}>
                    <Flex
                      align="center"
                      justify="center"
                      addClass={styles.imgWrapper}
                    >
                      {imgUrl ? (
                        <img src={imgUrl} alt={firstName} />
                      ) : (
                        <Desc>{`${firstName[0]}${lastName[0]}`}</Desc>
                      )}
                    </Flex>
                    <Flex flexDirection="column" gap={5}>
                      <Title level={5}>
                        {firstName} {lastName}
                      </Title>
                      <Desc addClass={styles.descCompanyName}>
                        {companyName}
                      </Desc>
                    </Flex>
                  </Flex>
                </Flex>
              </Card>
            )
          )}
        </div>

        <CardConsultation
          title="Готовы автоматизировать свой бизнес?"
          desc="Получите бесплатную консультацию и узнайте, как мы можем помочь вашей компании"
          btnText="Оставить заявку"
        />
      </div>
    </Section>
  );
}

export default memo(CustomerReviews);
