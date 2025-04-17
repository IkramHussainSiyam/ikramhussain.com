import { InfiniteSlider } from "~/components/ui/infinite-slider";

export function SkillsTitle() {
  return (
    <InfiniteSlider reverse gap={150} speed={300} className="">
      <span>Skills</span>
      <span>/</span>
      <span>Tech-Stack</span>
      <span>/</span>
      <span>Skills</span>
      <span>/</span>
      <span>Tech-Stack</span>
      <span>/</span>
    </InfiniteSlider>
  );
}
