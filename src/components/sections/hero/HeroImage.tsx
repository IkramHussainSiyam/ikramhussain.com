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
      className="size-40 object-cover absolute top-0 -right-[7.5rem] shadow-2xl rounded-[2rem]"
    ></motion.img>
  );
}
