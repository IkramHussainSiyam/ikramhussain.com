import Section from "~/components/common/section";
import useJsonData from "~/hooks/useJsonData";
import "~/motion/breathing-text.css";
import { type ISkillGroupData } from "~/types/data";
import SkillsGroups from "./SkillsGroups";

export default function SkillSection() {
  const { skills } = useJsonData<ISkillGroupData>("skills");

  return (
    <Section id="skills" sectionTitle="skills">
      <div className="my-32 section-padding grid grid-cols-2 gap-x-[calc(150px+32px)] gap-y-14">
        {skills.map((groupInfo) => (
          <SkillsGroups groupInfo={groupInfo} />
        ))}
      </div>
    </Section>
  );
}
