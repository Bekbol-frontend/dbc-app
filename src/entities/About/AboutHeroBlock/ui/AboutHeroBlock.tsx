import { Hero } from "@/shared/ui/Hero";
import { Section } from "@/shared/ui/Section";
import { memo } from "react";

function AboutHeroBlock() {
  return (
    <Section>
      <div className="container">
        <Hero
          title="Data Biznes Control"
          desc="Команда профессионалов, создающих современные решения для бизнеса."
        />
      </div>
    </Section>
  );
}

export default memo(AboutHeroBlock);
