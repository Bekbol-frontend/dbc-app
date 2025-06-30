import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "../RootLayout/RootLayout";
import { HomePageAsync } from "@/pages/HomePage";
import { routePaths } from "@/shared/config/routeConfig";
import { AboutPageAsync } from "@/pages/AboutPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

function AppRouter() {
  return (
    <Routes>
      <Route path={routePaths.HOME} element={<RootLayout />}>
        <Route index element={<HomePageAsync />} />
        <Route path={routePaths.ABOUT} element={<AboutPageAsync />} />
      </Route>

      <Route path={routePaths.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}

export default memo(AppRouter);
