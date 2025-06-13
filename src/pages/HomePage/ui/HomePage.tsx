import { Advantages } from "@/entities/Advantages";
import { HerroBlock } from "@/entities/HerroBlock";
import { memo } from "react";

function HomePage() {
  return (
    <>
      <HerroBlock />
      <Advantages />
    </>
  );
}

export default memo(HomePage);
