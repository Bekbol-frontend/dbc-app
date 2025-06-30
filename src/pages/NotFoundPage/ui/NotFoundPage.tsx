import { Section } from "@/shared/ui/Section";
import styles from "./NotFoundPage.module.scss";
import { Flex } from "@/shared/ui/Flex";
import { Title } from "@/shared/ui/Title";
import { Button } from "@/shared/ui/Button";
import { useNavigate } from "react-router-dom";
import { routePaths } from "@/shared/config/routeConfig";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Section addClass={styles.notFoundPage}>
      <Flex
        addClass={styles.card}
        align="center"
        flexDirection="column"
        gap={20}
      >
        <Title>404</Title>
        <Title level={4}>Страница не найдена</Title>
        <Button
          type_btn="primary"
          onClick={() => navigate(routePaths.HOME, { replace: true })}
        >
          На главную
        </Button>
      </Flex>
    </Section>
  );
}

export default NotFoundPage;
