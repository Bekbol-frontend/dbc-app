import { memo } from "react";
import { Section } from "@/shared/ui/Section";
import { Title } from "@/shared/ui/Title";
import { advantageItems } from "../model/types";
import { Card } from "@/shared/ui/Card";
import { Flex } from "@/shared/ui/Flex";
import { Desc } from "@/shared/ui/Desc";
import styles from "./Advantages.module.scss";
import { useTranslation } from "react-i18next";

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
            {advantageItems.map(({ id, Icon, title, description }) => (
              <Card key={id} addClass={styles.card}>
                <Flex flexDirection="column" gap={15}>
                  <Flex align="center" gap={10}>
                    <Icon className={styles.icon} />
                    <Title level={4}>{t(title)}</Title>
                  </Flex>
                  <Desc>{t(description)}</Desc>
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
