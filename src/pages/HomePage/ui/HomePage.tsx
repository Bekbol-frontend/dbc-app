import { memo } from "react";
import { Advantages } from "@/entities/Advantages";
import { HerroBlock } from "@/entities/HerroBlock";
import { OurServices } from "@/entities/OurServices";
import { SuccessfulCases } from "@/entities/SuccessfulCases";
import { CustomerReviews } from "@/entities/CustomerReviews";

function HomePage() {
  return (
    <>
      <HerroBlock />
      <Advantages />
      <OurServices />
      <SuccessfulCases />
      <CustomerReviews />
    </>
  );
}

export default memo(HomePage);
