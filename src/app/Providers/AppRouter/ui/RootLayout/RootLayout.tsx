import { memo } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/Header";
import styles from "./RootLayout.module.scss";
import { Footer } from "@/widgets/Footer";

function RootLayout() {
  return (
    <>
      <Header />
      <main className={styles.rootLayout}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default memo(RootLayout);
