import { useEffect, useRef, useState } from "react";
import { cn } from "~/lib/utils";
import "~/motion/fade-in.css";
import "~/motion/tilt-in.css";

interface TextRotateProps {
  words: string[];
  interval?: number;
  className?: string;
}

function TextRotate({ words, interval = 2000, className }: TextRotateProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const currentClasses = "opacity-100 translate-x-0 translate-y-0";
  const nextClasses = "translate-x-0 translate-y-full";

  useEffect(() => {
    const cycle = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(cycle);
  }, [words.length, interval]);

  return (
    <h1 className={cn("fade-in-bck [--wait:0.7s]", className)}>
      <span className="block h-16 relative w-full" ref={wrapperRef}>
        {words.map((word, wordIndex) => {
          const isCurrent = wordIndex === currentIndex;
          const isNext = wordIndex === (currentIndex + 1) % words.length;
          return (
            <span
              key={wordIndex}
              className={`absolute bottom-full left-0 opacity-0 translate-x-0 translate-y-full transition-all duration-150 ${
                isCurrent ? currentClasses : isNext ? nextClasses : ""
              }`}
            >
              {word.split("").map((char, charIndex) => (
                <span
                  key={`${wordIndex}-${charIndex}-${currentIndex}`}
                  className="inline-block tilt-in-bottom-2"
                  style={
                    {
                      "--wait": `${charIndex * 0.02}s`,
                      "--dur": "0.4s",
                    } as React.CSSProperties
                  }
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          );
        })}
      </span>
    </h1>
  );
}

export default TextRotate;
