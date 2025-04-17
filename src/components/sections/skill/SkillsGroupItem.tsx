import Skill from "./Skill";

export default function SkillsGroupItem() {
  return (
    <div className="w-[calc(50%-5rem)]">
      <div className="flex items-center justify-between">
        <h4 className="uppercase font-semibold text-3xl">languages</h4>
        <span className="font-semibold font-display italic tracking-widest text-lg text-primary/80">
          01
        </span>
      </div>

      <div className="my-7 grid grid-cols-2 gap-x-12 gap-y-4">
        <Skill name="html" />
        <Skill name="css" />
        <Skill name="javascript" />
        <Skill name="typescript" />
      </div>
    </div>
  );
}
