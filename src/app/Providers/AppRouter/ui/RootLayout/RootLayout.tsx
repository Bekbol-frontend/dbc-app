import { memo, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/Header";
import styles from "./RootLayout.module.scss";
import { Footer } from "@/widgets/Footer";
import { BtnToTop } from "@/shared/ui/BtnToTop";
import { PageLoading } from "@/widgets/PageLoading";

function RootLayout() {
  return (
    <Suspense fallback={<PageLoading />}>
      <Header />
      <main className={styles.rootLayout}>
        <Outlet />
      </main>
      <Footer />
      <BtnToTop />
    </Suspense>
  );
}

export default memo(RootLayout);
