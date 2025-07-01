import { Section } from "@/shared/ui/Section";
import { TextBlock } from "@/shared/ui/TextBlock";
import { memo } from "react";
import Sertificats from "@/shared/assets/sertificats/sert-g.jpg";
import { Flex } from "@/shared/ui/Flex";
import { Title } from "@/shared/ui/Title";
import { Desc } from "@/shared/ui/Desc";
import styles from "./AboutSertificats.module.scss";

const certificats = [
  {
    id: 1,
    imgUrl: Sertificats,
    title: "amoCRM",
    desc: "Сертификат партнера amoCRM",
  },
  {
    id: 2,
    imgUrl: Sertificats,
    title: "МойСклад",
    desc: "Сертификат партнера МойСклад",
  },
  {
    id: 3,
    imgUrl: Sertificats,
    title: "Sipuni",
    desc: "Сертификат партнера Sipuni",
  },
  {
    id: 4,
    imgUrl: Sertificats,
    title: "Roistat",
    desc: "Сертификат партнера Roistat",
  },
  {
    id: 5,
    imgUrl: Sertificats,
    title: "amoCRM",
    desc: "Сертификат партнера amoCRM",
  },
  {
    id: 6,
    imgUrl: Sertificats,
    title: "МойСклад",
    desc: "Сертификат партнера МойСклад",
  },
  {
    id: 7,
    imgUrl: Sertificats,
    title: "Sipuni",
    desc: "Сертификат партнера Sipuni",
  },
  {
    id: 8,
    imgUrl: Sertificats,
    title: "Roistat",
    desc: "Сертификат партнера Roistat",
  },
  {
    id: 9,
    imgUrl: Sertificats,
    title: "amoCRM",
    desc: "Сертификат партнера amoCRM",
  },
  {
    id: 10,
    imgUrl: Sertificats,
    title: "МойСклад",
    desc: "Сертификат партнера МойСклад",
  },
  {
    id: 11,
    imgUrl: Sertificats,
    title: "Sipuni",
    desc: "Сертификат партнера Sipuni",
  },
  {
    id: 12,
    imgUrl: Sertificats,
    title: "Roistat",
    desc: "Сертификат партнера Roistat",
  },
];

function AboutSertificats() {
  return (
    <Section>
      <div className="container">
        <TextBlock
          title="Сертификаты и лицензии"
          desc="Подтверждение нашего профессионализма и качества услуг"
        />

        <div className={styles.block}>
          <div className={styles.wrapperCertificats}>
            {certificats.map((card) => (
              <Flex
                key={card.id}
                flexDirection="column"
                gap={15}
                addClass={styles.card}
              >
                <Flex addClass={styles.imgWrapper}>
                  <img src={card.imgUrl} alt={card.title} />
                </Flex>
                <Flex flexDirection="column" gap={2}>
                  <Title level={5}>{card.title}</Title>
                  <Desc addClass={styles.desc}>{card.desc}</Desc>
                </Flex>
              </Flex>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default memo(AboutSertificats);
