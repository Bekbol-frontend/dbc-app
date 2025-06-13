import { memo } from "react";
import { Section } from "@/shared/ui/Section";
import { Title } from "@/shared/ui/Title";
import { advantageItems } from "../model/types";
import { Card } from "@/shared/ui/Card";
import { Flex } from "@/shared/ui/Flex";
import { Desc } from "@/shared/ui/Desc";
import styles from "./Advantages.module.scss";

function Advantages() {
  return (
    <Section>
      <div className="container">
        <div>
          <Title addClass={styles.title} level={3}>
            Наши преимущества
          </Title>

          <div className={styles.gridBlock}>
            {advantageItems.map(({ id, Icon, title, description }) => (
              <Card key={id}>
                <Flex flexDirection="column" gap={15}>
                  <Flex align="center" gap={10}>
                    <Icon /> <Title level={5}>{title}</Title>
                  </Flex>
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

export default memo(Advantages);
