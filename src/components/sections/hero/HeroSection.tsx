import AboutMe from "./AboutMe";
import Greetings from "./Greetings";
import HeroActions from "./HeroActions";
import HeroTitle from "./HeroTitle";
import Slogan from "./Slogan";

export default function HeroSection() {
  return (
    <div className="my-36 sm:my-20">
      <div className="relative">
        <Greetings />
        <HeroTitle />
        <Slogan />
      </div>
      <AboutMe />
      <HeroActions />
    </div>
  );
}
