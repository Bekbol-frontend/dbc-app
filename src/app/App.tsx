import { memo } from "react";
import { AppRouter } from "./Providers/AppRouter";

function App() {
  return <AppRouter />;
}

export default memo(App);
