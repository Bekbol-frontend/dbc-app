import { Section } from "@/shared/ui/Section";
import { TextBlock } from "@/shared/ui/TextBlock";
import { memo } from "react";
import PersonImg from "@/shared/assets/team/person.webp";
import { Flex } from "@/shared/ui/Flex";
import { Desc } from "@/shared/ui/Desc";
import styles from "./AboutTeam.module.scss";
import { Title } from "@/shared/ui/Title";

const teams = [
  {
    id: 1,
    fullName: "Sasiona Jumong",
    job: "Директор",
    imgUrl: PersonImg,
  },
  {
    id: 2,
    fullName: "Sasiona Jumong",
    job: "Директор",
    imgUrl: PersonImg,
  },
  {
    id: 3,
    fullName: "Sasiona Jumong",
    job: "Директор",
    imgUrl: PersonImg,
  },
  {
    id: 4,
    fullName: "Sasiona Jumong",
    job: "Директор",
    imgUrl: PersonImg,
  },
  {
    id: 5,
    fullName: "Sasiona Jumong",
    job: "Директор",
    imgUrl: PersonImg,
  },
  {
    id: 6,
    fullName: "Sasiona Jumong",
    job: "Директор",
    imgUrl: PersonImg,
  },
  {
    id: 7,
    fullName: "Sasiona Jumong",
    job: "Директор",
    imgUrl: PersonImg,
  },
  {
    id: 8,
    fullName: "Sasiona Jumong",
    job: "Директор",
    imgUrl: PersonImg,
  },
  {
    id: 9,
    fullName: "Sasiona Jumong",
    job: "Директор",
    imgUrl: PersonImg,
  },
  {
    id: 10,
    fullName: "Sasiona Jumong",
    job: "Директор",
    imgUrl: PersonImg,
  },
  {
    id: 11,
    fullName: "Sasiona Jumong",
    job: "Директор",
    imgUrl: PersonImg,
  },
  {
    id: 12,
    fullName: "Sasiona Jumong",
    job: "Директор",
    imgUrl: PersonImg,
  },
];

function AboutTeam() {
  return (
    <Section>
      <div className="container">
        <TextBlock title="Наша команда" />

        <div className={styles.block}>
          <div className={styles.teamsWrapper}>
            {teams.map((team) => (
              <div key={team.id} className={styles.item}>
                <Flex flexDirection="column">
                  <Flex>
                    <img
                      src={team.imgUrl}
                      alt={team.fullName}
                      className={styles.imgWrapper}
                    />
                  </Flex>
                  <Flex
                    addClass={styles.infoWrapper}
                    flexDirection="column"
                    gap={2}
                  >
                    <Title level={4} addClass={styles.fullNameTitle}>
                      {team.fullName}
                    </Title>
                    <Desc>{team.job}</Desc>
                  </Flex>
                </Flex>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default memo(AboutTeam);
