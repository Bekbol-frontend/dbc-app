import { Card } from "@/shared/ui/Card";
import { Section } from "@/shared/ui/Section";
import { TextBlock } from "@/shared/ui/TextBlock";
import { memo } from "react";
import styles from "./AboutHistory.module.scss";
import { Title } from "@/shared/ui/Title";
import { Desc } from "@/shared/ui/Desc";
import { Flex } from "@/shared/ui/Flex";

const items = [
  {
    id: 1,
    title: "Основание компании",
    desc: "Компания основана в Ташкенте командой IT-энтузиастов",
    year: 2014,
  },
  {
    id: 2,
    title: "Первые автоматизации",
    desc: "Запуск проектов CRM/ERP систем для местного бизнеса",
    year: 2016,
  },
  {
    id: 3,
    title: "Расширение услуг",
    desc: "Запуск видеонаблюдения и IoT-решений для промышленности",
    year: 2020,
  },
  {
    id: 4,
    title: "Международное развитие",
    desc: "Выход на международный рынок и расширение географии",
    year: 2023,
  },
];

function AboutHistory() {
  return (
    <Section>
      <div className="container">
        <TextBlock title="История компании" />

        <div className={styles.items}>
          {items.map((card) => (
            <Card key={card.id}>
              <Flex flexDirection="column" gap={10}>
                <Title level={4}>
                  {card.year} год - {card.title}
                </Title>
                <Desc>{card.desc}</Desc>
              </Flex>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default memo(AboutHistory);
