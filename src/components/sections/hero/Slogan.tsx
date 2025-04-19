import TextRotate from "~/components/common/TextRotate";

export default function Slogan() {
  return (
    <>
      <TextRotate
        className="text-6xl font-display italic text-primary mb-8 ml-3"
        words={["Software Developer", "Web Developer", "Frontend Developer"]}
      />
    </>
  );
}
