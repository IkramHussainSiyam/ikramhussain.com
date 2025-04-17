import TextRotate from "~/components/ui/text-rotate";

export default function Slogan() {
  return (
    <TextRotate
      texts={[
        "Web Developer",
        "Front End Developer",
        "Software Developer",
        "Creating with Passion",
      ]}
      mainClassName="text-6xl lg:text-5xl md:text-4xl sm:text-2xl font-display italic text-primary/80 absolute -bottom-5 left-4 sm:-bottom-10 sm:left-0 md:-bottom-10 md:left-0 lg:-bottom-12 lg:left-0"
      staggerFrom={"first"}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-10%", opacity: 0 }}
      staggerDuration={0.015}
      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
      transition={{ type: "spring", damping: 30, stiffness: 400 }}
      rotationInterval={3000}
    />
  );
}
