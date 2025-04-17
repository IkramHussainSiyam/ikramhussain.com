import SkillsGroups from "./SkillsGroups";
import { SkillsTitle } from "./SkillsTitle";

export default function SkillSection() {
  return (
    <div className="my-36">
      <h3 className="text-9xl font-bold uppercase">
        <SkillsTitle />
      </h3>
      <SkillsGroups />
    </div>
  );
}
