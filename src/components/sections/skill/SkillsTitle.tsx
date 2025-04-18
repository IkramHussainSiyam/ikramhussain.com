import { Marquee } from "~/components/ui/marquee";

export function SkillsTitle() {
  return (
    <h2 className="text-9xl font-bold uppercase infinite-slide">
      <Marquee className="[--duration:4s] [--gap:6rem]">
        <span>skills</span>
        <span>/</span>
        <span>tech-stack</span>
        <span>/</span>
      </Marquee>
    </h2>
  );
}
