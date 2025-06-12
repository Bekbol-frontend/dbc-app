import { memo } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/Header";
import styles from "./RootLayout.module.scss";

function RootLayout() {
  return (
    <>
      <Header />
      <main className={styles.rootLayout}>
        <Outlet />
      </main>
      <footer>footer element</footer>
    </>
  );
}

export default memo(RootLayout);
