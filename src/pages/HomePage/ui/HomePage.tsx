import { memo } from "react";
import { Advantages } from "@/entities/Advantages";
import { HerroBlock } from "@/entities/HerroBlock";
import { OurServices } from "@/entities/OurServices";
import { SuccessfulCases } from "@/entities/SuccessfulCases";

function HomePage() {
  return (
    <>
      <HerroBlock />
      <Advantages />
      <OurServices />
      <SuccessfulCases />
    </>
  );
}

export default memo(HomePage);
