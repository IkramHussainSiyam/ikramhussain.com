import { useEffect, useRef } from "react";

type UseTextScrambleOptions = {
  hover?: boolean;
  speed?: number;
};

export default function useTextScramble<T extends HTMLElement>(
  options: UseTextScrambleOptions = {}
) {
  const { hover = false, speed = 20 } = options;
  const textRef = useRef<T>(null);
  const randomChars = "!@#$%^&*()_-+=<>?";

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const originalText = textElement.innerText;
    let interval: NodeJS.Timeout | null = null;

    const runScramble = () => {
      let iterations = 0;
      if (interval) clearInterval(interval);

      interval = setInterval(() => {
        const scrambled = originalText
          .split("")
          .map((char, index) => {
            if (index < Math.floor(iterations)) return char;
            return randomChars.charAt(
              Math.floor(Math.random() * randomChars.length)
            );
          })
          .join("");

        if (textElement) textElement.innerText = scrambled;

        iterations += 1 / 3;
        if (iterations >= originalText.length) {
          clearInterval(interval!);
          if (textElement) textElement.innerText = originalText;
        }
      }, speed);
    };

    if (hover) {
      const target = textElement.parentElement || textElement;
      const handleHover = () => runScramble();
      target.addEventListener("mouseenter", handleHover);

      return () => {
        if (interval) clearInterval(interval);
        target.removeEventListener("mouseenter", handleHover);
      };
    } else {
      runScramble();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [hover, speed]);

  return textRef;
}
