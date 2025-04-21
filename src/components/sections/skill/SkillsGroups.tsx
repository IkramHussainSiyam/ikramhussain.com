import SkillsGroupItem from "./SkillsGroupItem";

interface ISKillGroupInfo {
  groupHeading: string;
  groupSerial: number;
  skills: string[];
}

export default function SkillsGroups({
  groupInfo,
}: {
  groupInfo: ISKillGroupInfo;
}) {
  return (
    <SkillsGroupItem
      groupHeading={[groupInfo.groupHeading, groupInfo.groupSerial]}
      skills={groupInfo.skills}
    />
  );
}
