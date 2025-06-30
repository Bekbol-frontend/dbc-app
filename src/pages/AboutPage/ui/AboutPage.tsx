import { AboutHeroBlock } from "@/entities/About/AboutHeroBlock";
import { AboutHistory } from "@/entities/About/AboutHistory";
import { AboutTeam } from "@/entities/About/AboutTeam";

function AboutPage() {
  return (
    <>
      <AboutHeroBlock />
      <AboutHistory />
      <AboutTeam />
    </>
  );
}

export default AboutPage;
