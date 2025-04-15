import { motion } from "motion/react";
import { TextReveal } from "~/components/ui/text-reveal";

export default function Greetings() {
  const variants = {
    container: {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.02,
        },
      },
    },
    item: {
      hidden: {
        opacity: 0,
        rotateX: 45,
        y: 10,
      },
      visible: {
        opacity: 1,
        rotateX: 0,
        y: 0,
        transition: {
          duration: 0.1,
        },
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className="absolute -top-4 left-2 sm:-top-9 sm:-left-1.5 md:-top-10 md:-left-1.5 lg:-top-14 lg:-left-1.5 flex items-center gap-4 sm:gap-3"
    >
      <motion.img
        initial={{ rotate: 15 }}
        animate={{
          rotate: 0,
          transition: {
            duration: 0.2,
            delay: 0.4,
            repeatType: "reverse",
            repeat: 3,
          },
        }}
        src="/waving-hand.svg"
        alt="Waving Hand"
        className="size-16 sm:size-8 md:size-12 object-cover origin-bottom mb-4 sm:mb-1.5 md:mb-2"
      />
      <TextReveal
        className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl"
        per="char"
        delay={0.5}
        variants={variants}
      >
        Hi There, I'm
      </TextReveal>
    </motion.div>
  );
}
