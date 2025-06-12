import { Flex } from "@/shared/ui/Flex";
import { Input } from "@/shared/ui/Input";
import { memo } from "react";
import { useTranslation } from "react-i18next";

function LeaveForm() {
  const { t } = useTranslation();

  return (
    <form>
      <Flex flexDirection="column" gap={15}>
        <Input label={t("Фамилия")} id="last_name" autoFocus />
        <Input label={t("Имя")} id="first_name" />
        <Input label={t("Номер телефона")} id="phone" phone />
      </Flex>
    </form>
  );
}

export default memo(LeaveForm);
