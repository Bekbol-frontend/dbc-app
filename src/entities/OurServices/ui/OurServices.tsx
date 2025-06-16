import { memo } from "react";
import { Section } from "@/shared/ui/Section";
import { Title } from "@/shared/ui/Title";
import { Desc } from "@/shared/ui/Desc";
import { Flex } from "@/shared/ui/Flex";
import { ourServicesItems } from "../model/items";
import { Card } from "@/shared/ui/Card";
import styles from "./OurServices.module.scss";

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
            {ourServicesItems.map(({ Icon, description, title, id }) => (
              <Card key={id} addClass={styles.card}>
                <Flex
                  flexDirection="column"
                  gap={15}
                  align="center"
                  justify="center"
                >
                  <Flex
                    align="center"
                    justify="center"
                    addClass={styles.iconWrapper}
                  >
                    <Icon className={styles.icon} />
                  </Flex>
                  <Title level={4}>{title}</Title>
                  <Desc>{description}</Desc>
                </Flex>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default memo(OurServices);
