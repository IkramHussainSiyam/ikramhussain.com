import HeroSection from "~/components/sections/hero/HeroSection";
import SkillSection from "~/components/sections/skill/SkillSection";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ikram Hussain - Software Developer" },
    {
      name: "description",
      content:
        "Hi, I'm Ikram Hussain, a software enginner bridging the gap between science and design – dedicated to creating innovative and intuitive SaaS products",
    },
  ];
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillSection />
    </>
  );
}
