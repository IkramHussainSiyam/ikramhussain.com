import Button from "~/components/ui/button";
import useTextScramble from "~/hooks/useTextScramble";
import "~/motion/slide-in.css";

export default function HeroActions() {
  const textRef = useTextScramble<HTMLButtonElement>({ hover: true, speed: 1 });

  return (
    <Button
      asChild
      className="flex slide-in-blurred-top text-xs w-36 h-10 sm:text-xl sm:w-56 sm:h-14"
    >
      <a
        href="/assets/Ikram_Hussain_Siaym_Resume.pdf"
        download
        rel="noopener noreferrer"
        target="_blank"
      >
        <span ref={textRef}>Grab My Resume</span>
      </a>
    </Button>
  );
}
