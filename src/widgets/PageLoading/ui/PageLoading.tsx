import { Title } from "@/shared/ui/Title";
import { useTranslation } from "react-i18next";
import styles from "./PageLoading.module.scss";

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
