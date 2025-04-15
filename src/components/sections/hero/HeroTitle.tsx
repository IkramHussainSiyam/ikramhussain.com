import { motion } from "motion/react";
import { TextScramble } from "~/components/ui/text-scramble";
import HeroImage from "./HeroImage";

export default function HeroTitle() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className="inline-block max-w-full whitespace-nowrap relative"
    >
      <TextScramble
        as={"h1"}
        duration={1}
        className="uppercase font-semibold tracking-[-0.055em] text-foreground text-[14rem] lg:text-[5rem] md:text-[5.5rem] sm:text-[2.7rem] sm:font-bold"
      >
        ikram hussain
      </TextScramble>
      <HeroImage />
    </motion.div>
  );
}
