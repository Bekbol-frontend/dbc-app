import { memo } from "react";
import styles from "./CardInfoItem..module.scss";
import { clsx } from "@/shared/lib/clsx";
import { Card } from "../../Card";
import { Flex } from "../../Flex";
import { Title } from "../../Title";
import { Desc } from "../../Desc";
import type { ICardInfoItem } from "../model/types";

interface IProps {
  addClass?: string;
  card: ICardInfoItem;
}

function CardInfoItem(props: IProps) {
  const { addClass = "", card } = props;
  const { Icon, description, title, bottomDesc } = card;

  return (
    <Card addClass={clsx([styles.card, addClass])}>
      <Flex flexDirection="column" gap={15} align="center" justify="center">
        <Flex align="center" justify="center" addClass={styles.iconWrapper}>
          <Icon className={styles.icon} />
        </Flex>
        <Title level={4}>{title}</Title>
        <Desc>{description}</Desc>
        {bottomDesc && (
          <Card addClass={styles.cardInnerBottom}>
            <Desc>{bottomDesc}</Desc>
          </Card>
        )}
      </Flex>
    </Card>
  );
}

export default memo(CardInfoItem);
