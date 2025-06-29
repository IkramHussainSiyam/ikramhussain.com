import Container from "~/components/common/container";
import ContactSection from "~/components/sections/contact/ContactSection";
import Footer from "~/components/sections/footer/Footer";
import HeroSection from "~/components/sections/hero/HeroSection";
import ProjectsSection from "~/components/sections/projects/ProjectsSection";
import SkillSection from "~/components/sections/skill/SkillSection";
import { seoMetadata } from "~/data/seo";
import type { Route } from "./+types/home";

export default function Home() {
  return (
    <>
      <Container>
        <HeroSection />
        <SkillSection />
        <ProjectsSection />
        <ContactSection />
      </Container>
      <Footer />
    </>
  );
}

export function meta({}: Route.MetaArgs): Route.MetaDescriptors {
  return seoMetadata;
}
