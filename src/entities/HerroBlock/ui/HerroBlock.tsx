import { memo } from "react";
import { Section } from "@/shared/ui/Section";
import { Hero } from "@/shared/ui/Hero";

function HerroBlock() {
  return (
    <>
      <Section>
        <div className="container">
          <Hero
            title="Data Biznes Control"
            desc=" Оптимизируем процессы, увеличиваем эффективность, уменьшаем расходы,
          Автоматизируем и систематизируем ваш бизнес."
          />
        </div>
      </Section>
    </>
  );
}

export default memo(HerroBlock);
