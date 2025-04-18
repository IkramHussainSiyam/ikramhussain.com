import FancyButton from "~/components/common/fancy-button";
import "~/motion/slide-in.css";

export default function HeroActions() {
  return (
    <div className="slide-in-blurred-top ml-3">
      <FancyButton className="text-2xl px-12 py-9">Download CV</FancyButton>
    </div>
  );
}
