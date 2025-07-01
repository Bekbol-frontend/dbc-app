import { Title } from "@/shared/ui/Title";
import styles from "./PageLoading.module.scss";
import { useTranslation } from "react-i18next";

function PageLoading() {
  const { t } = useTranslation();

  return (
    <div className={styles.pageLoading}>
      <div className={styles.block}>
        <Title level={4}>{t("Загрузка...")}</Title>
      </div>
    </div>
  );
}

export default PageLoading;
