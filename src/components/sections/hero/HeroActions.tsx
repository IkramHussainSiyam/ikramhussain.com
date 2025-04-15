import { motion } from "motion/react";
import FancyButton from "~/components/common/fancy-button";

export default function HeroActions() {
  return (
    <motion.div
      initial={{ y: "-50%", opacity: 0 }}
      animate={{
        y: "0%",
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: 0.4,
          type: "spring",
          damping: 20,
          stiffness: 400,
        },
      }}
      className="flex items-center gap-5 sm:gap-3"
    >
      <FancyButton className="text-2xl px-12 py-9 ml-0 2xl:ml-4 sm:px-6 sm:py-4 sm:text-sm">
        Download CV
      </FancyButton>
    </motion.div>
  );
}
