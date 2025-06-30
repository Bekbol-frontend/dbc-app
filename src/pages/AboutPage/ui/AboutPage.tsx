import { AboutHeroBlock } from "@/entities/About/AboutHeroBlock";
import { AboutHistory } from "@/entities/About/AboutHistory";
import { AboutOurValues } from "@/entities/About/AboutOurValues";
import { AboutTeam } from "@/entities/About/AboutTeam";

function AboutPage() {
  return (
    <>
      <AboutHeroBlock />
      <AboutHistory />
      <AboutTeam />
      <AboutOurValues />
    </>
  );
}

export default AboutPage;
