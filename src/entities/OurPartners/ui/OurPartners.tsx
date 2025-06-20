import { Section } from "@/shared/ui/Section";
import { TextBlock } from "@/shared/ui/TextBlock";
import { memo } from "react";
import PatrnersSwieper from "./PatrnersSwieper/PatrnersSwieper";

function OurPartners() {
  return (
    <Section>
      <div className="container">
        <TextBlock
          title="Наши партнёры"
          desc="Компании, которые доверяют нам автоматизацию своего бизнеса"
        />
        <PatrnersSwieper />
      </div>
    </Section>
  );
}

export default memo(OurPartners);
