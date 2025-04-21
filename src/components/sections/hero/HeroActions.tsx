import Button from "~/components/ui/button";
import useTextScramble from "~/hooks/useTextScramble";
import "~/motion/slide-in.css";

export default function HeroActions() {
  const textRef = useTextScramble<HTMLButtonElement>({ hover: true, speed: 1 });

  return (
    <div className="slide-in-blurred-top ml-3">
      <Button className="text-xl w-56 h-14">
        <span ref={textRef}>Grab My Resume</span>
      </Button>
    </div>
  );
}
