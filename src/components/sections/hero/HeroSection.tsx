import Section from "~/components/common/section";
import AboutMe from "./AboutMe";
import Greetings from "./Greetings";
import HeroActions from "./HeroActions";
import HeroTitle from "./HeroTitle";
import Slogan from "./Slogan";

export default function HeroSection() {
  return (
    <main className="section-padding-x section-padding-y">
      <Section>
        <Greetings />
        <HeroTitle />
        <Slogan />
        <AboutMe />
        <HeroActions />
      </Section>
    </main>
  );
}
