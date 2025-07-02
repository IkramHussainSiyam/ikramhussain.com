import Button from "~/components/ui/button";
import useTextScramble from "~/hooks/useTextScramble";
import "~/motion/slide-in.css";

export default function HeroActions() {
  const textRef = useTextScramble<HTMLButtonElement>({ hover: true, speed: 1 });

  return (
    <a
      href="https://ikramhussainsiyamresume2025.tiiny.site"
      rel="noopener noreferrer"
      target="_blank"
    >
      <Button className="flex slide-in-blurred-top text-xs w-36 h-10 sm:text-xl sm:w-56 sm:h-14">
        <span ref={textRef} className="pointer-events-none select-none">
          Grab My Resume
        </span>
      </Button>
    </a>
  );
}
