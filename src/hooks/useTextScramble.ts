import { useEffect, useRef } from "react";

export default function UseTextScramble<T extends HTMLElement>() {
  const textRef = useRef<T>(null);
  const randomChars = "!@#$%^&*()_-+=<>?";

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const originalText = textElement.innerText;
    let iterations = 0;

    const interval = setInterval(() => {
      const scrambled = originalText
        .split("")
        .map((char, index) => {
          if (index < Math.floor(iterations)) return char;
          return randomChars.charAt(
            Math.floor(Math.random() * randomChars.length)
          );
        })
        .join("");

      textElement.innerText = scrambled;

      iterations += 1 / 3;
      if (iterations >= originalText.length) {
        clearInterval(interval);
        textElement.innerText = originalText; // Final correction pass
      }
    }, 20);
  }, []);

  return textRef;
}
