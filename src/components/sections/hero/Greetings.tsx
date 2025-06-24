import { useEffect, useState } from "react";
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
    <h4 className="text-5xl flex items-center gap-4 text-primary">
      <span
        className={`inline-block text-4xl ${animating ? "wavy-rotation" : ""}`}
      >
        👋
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
    </h4>
  );
}
