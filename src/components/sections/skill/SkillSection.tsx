import Section from "~/components/common/section";
import { SectionBorderBG } from "~/components/layout/bordered-background";
import useJsonData from "~/hooks/useJsonData";
import "~/motion/breathing-text.css";
import { type ISkillGroupData } from "~/types/data";
import SkillsGroups from "./SkillsGroups";

export default function SkillSection() {
  const { skills } = useJsonData<ISkillGroupData>("skills");

  return (
    <Section id="skills" sectionTitle="skills">
      <article className="relative section-padding-y grid grid-cols-1 2xl:grid-cols-2 2xl:gap-x-[calc(150px+32px)] gap-y-8 2xl:gap-y-14">
        {skills.map((groupInfo) => (
          <SkillsGroups key={groupInfo.groupHeading} groupInfo={groupInfo} />
        ))}
        <SectionBorderBG />
      </article>
    </Section>
  );
}
