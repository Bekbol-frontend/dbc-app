import { memo } from "react";
import { Advantages } from "@/entities/Advantages";
import { HerroBlock } from "@/entities/HerroBlock";
import { OurServices } from "@/entities/OurServices";

function HomePage() {
  return (
    <>
      <HerroBlock />
      <Advantages />
      <OurServices />
    </>
  );
}

export default memo(HomePage);
