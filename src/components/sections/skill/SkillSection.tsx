import Section from "~/components/common/section";
import SkillsGroups from "./SkillsGroups";
import { SkillsTitle } from "./SkillsTitle";

export default function SkillSection() {
  return (
    <Section id="skills">
      <SkillsTitle />
      <SkillsGroups />
    </Section>
  );
}
