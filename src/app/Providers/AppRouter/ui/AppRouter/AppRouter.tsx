import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "../RootLayout/RootLayout";
import { useTranslation } from "react-i18next";

function AppRouter() {
  const { t } = useTranslation();

  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route
          index
          element={
            <>
              <h1>{t("hello")}</h1>
            </>
          }
        />
      </Route>
    </Routes>
  );
}

export default memo(AppRouter);
