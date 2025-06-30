import { CardInfoItem, type ICardInfoItem } from "@/shared/ui/CardInfoItem";
import { Section } from "@/shared/ui/Section";
import { TextBlock } from "@/shared/ui/TextBlock";
import { memo } from "react";
import { FaStar, FaUsers, FaHandshake, FaShieldAlt } from "react-icons/fa";
import styles from "./AboutOurValues.module.scss";

const items: ICardInfoItem[] = [
  {
    id: 1,
    Icon: FaStar,
    title: "Качество на каждом этапе",
    description:
      "Мы стремимся к совершенству в каждой детали нашей работы, от планирования до реализации и поддержки проектов.",
  },
  {
    id: 2,
    Icon: FaUsers,
    title: "Персональный подход",
    description:
      "Каждый клиент уникален. Мы создаем индивидуальные решения, учитывая специфику вашего бизнеса и потребности.",
  },
  {
    id: 3,
    Icon: FaHandshake,
    title: "Партнёрство и доверие",
    description:
      "Мы строим отношения на основе взаимного доверия, открытости и честности во всех аспектах сотрудничества.",
  },
  {
    id: 4,
    Icon: FaShieldAlt,
    title: "Долгосрочная поддержка",
    description:
      "Наше партнерство не заканчивается с завершением проекта. Мы обеспечиваем постоянную поддержку и развитие.",
  },
];

function AboutOurValues() {
  return (
    <Section>
      <div className="container">
        <TextBlock
          title="Наши Ценности"
          desc="Принципы, которые определяют наш подход к работе и построению долгосрочных отношений с клиентами"
        />

        <div className={styles.wrapperItems}>
          {items.map((card) => (
            <CardInfoItem key={card.id} card={card} />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default memo(AboutOurValues);
