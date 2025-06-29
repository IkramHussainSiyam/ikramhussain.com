import { useEffect, useState } from "react";
import { MdWavingHand } from "react-icons/md";
import { cn } from "~/lib/utils";
import "~/motion/tilt-in.css";
import "~/motion/wavy-rotation.css";

export default function Greetings() {
  const [animating, setAnimating] = useState(true);
  const greetings = "Hi There, I'm";

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(false);
      requestAnimationFrame(() => setAnimating(true));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h3 className="text-2xl md:text-5xl flex items-center gap-3 md:gap-6">
      <span className={cn("inline-block", animating && "wavy-rotation")}>
        <MdWavingHand className="-rotate-90 text-2xl md:text-5xl" />
      </span>
      <span>
        {greetings.split("").map((char, index) => (
          <span
            key={index}
            className="inline-block tilt-in-bottom-2"
            style={{ "--wait": `${index * 0.01}s` } as React.CSSProperties}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </h3>
  );
}
