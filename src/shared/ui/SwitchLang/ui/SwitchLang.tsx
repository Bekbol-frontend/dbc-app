import { memo, useCallback } from "react";
import { Dropdown } from "../../Dropdown";
import { GrLanguage } from "react-icons/gr";
import { useTranslation } from "react-i18next";

const items = [
  { code: "uz", name: "UZ" },
  { code: "ru", name: "RU" },
];

function SwitchLang() {
  const { i18n } = useTranslation();

  const changeLang = useCallback(
    (code: string) => {
      i18n.changeLanguage(code);
    },
    [i18n]
  );

  return (
    <Dropdown
      items={items}
      Icon={GrLanguage}
      value={i18n.language}
      onSelect={changeLang}
    />
  );
}

export default memo(SwitchLang);
