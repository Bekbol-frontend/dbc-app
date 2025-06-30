import { Desc } from "../../Desc";
import { Flex } from "../../Flex";
import { Title } from "../../Title";
import styles from "./TextBlock.module.scss";

interface IProps {
  title: string;
  desc?: string;
}

function TextBlock({ title, desc }: IProps) {
  return (
    <Flex
      flexDirection="column"
      gap={10}
      align="center"
      addClass={styles.textBlock}
    >
      <Title>{title}</Title>
      {desc && <Desc>{desc}</Desc>}
    </Flex>
  );
}

export default TextBlock;
