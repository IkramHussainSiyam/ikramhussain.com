import "~/motion/breathing-text.css";
import "~/motion/fade-in.css";

export default function HeroTitle() {
  return (
    <h1 className="fade-in-bck [--wait:0.7s] my-4 md:my-7 lg:mb-5 lg:mt-7 uppercase font-heading text-4xl leading-[1.3] text-wrap sm:leading-normal md:text-7xl md:leading-[1.3] 2xl:text-[136px]">
      <span className="breathing-text">ikram hussain siyam</span>
    </h1>
  );
}
