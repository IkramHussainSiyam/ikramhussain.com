import { motion } from "motion/react";

export default function HeroImage() {
  return (
    <motion.img
      initial={{ rotate: 0, scale: 0.7, opacity: 0 }}
      animate={{
        rotate: 8,
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: 1.3,
          type: "spring",
          damping: 20,
          stiffness: 400,
        },
      }}
      src="/Me with headphone original.jpg"
      className="size-44 sm:size-16 sm:rounded-lg md:size-[100px] lg:size-28 md:rounded-3xl object-cover absolute top-0 -right-[9.2rem] sm:-top-8 sm:-right-10 md:-top-9 md:-right-[4.5rem] lg:-top-12 lg:-right-24 shadow-2xl rounded-[2rem]"
    ></motion.img>
  );
}
