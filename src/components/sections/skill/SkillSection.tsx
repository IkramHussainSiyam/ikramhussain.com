import Section from "~/components/common/section";
import "~/motion/breathing-text.css";
import SkillsGroups from "./SkillsGroups";

export default function SkillSection() {
  return (
    <Section id="skills" sectionTitle="SkillS">
      <SkillsGroups />
    </Section>
  );
}
