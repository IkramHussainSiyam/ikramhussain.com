import { TextReveal } from "~/components/ui/text-reveal";

export default function AboutMe() {
  return (
    <TextReveal
      per="char"
      preset="blur"
      className="text-2xl lg:text-xl md:text-lg sm:text-sm text-primary/80 2xl:ml-4 ml-0 mt-12 mb-8 sm:mb-6 lg:mt-16"
      speedReveal={15}
    >
      I specialize in developing interactive and scalable web applications using
      modern JavaScript frameworks, with a particular focus on Tailwind CSS and
      React. My expertise allows me to create contemporary, user-friendly
      interfaces that elevate user experiences.
    </TextReveal>
  );
}
