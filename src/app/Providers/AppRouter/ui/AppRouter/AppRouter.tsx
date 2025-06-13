import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "../RootLayout/RootLayout";
import { HomePageAsync } from "@/pages/HomePage";
import { routePaths } from "@/shared/config/routeConfig";

function AppRouter() {
  return (
    <Routes>
      <Route path={routePaths.HOME} element={<RootLayout />}>
        <Route index element={<HomePageAsync />} />
      </Route>
    </Routes>
  );
}

export default memo(AppRouter);
