import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "../RootLayout/RootLayout";
import { HomePageAsync } from "@/pages/HomePage";
import { routePaths } from "@/shared/config/routeConfig";
import { AboutPageAsync } from "@/pages/AboutPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ServicesPageAsync } from "@/pages/ServicesPage";

function AppRouter() {
  return (
    <Routes>
      <Route path={routePaths.HOME} element={<RootLayout />}>
        <Route index element={<HomePageAsync />} />
        <Route path={routePaths.ABOUT} element={<AboutPageAsync />} />
        <Route path={routePaths.SERVICES} element={<ServicesPageAsync />} />
      </Route>

      <Route path={routePaths.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}

export default memo(AppRouter);
