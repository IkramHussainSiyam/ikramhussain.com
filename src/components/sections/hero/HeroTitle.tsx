"use client";
import useTextScramble from "~/hooks/useTextScramble";
import "~/motion/breathing-text.css";
import "~/motion/fade-in.css";

export default function HeroTitle() {
  const textRef = useTextScramble<HTMLHeadingElement>();

  return (
    <h1 className="text-primary font-heading text-[136px] uppercase whitespace-nowrap fade-in-bck tracking-tight">
      <span ref={textRef} className="breathing-text [--wait:1s]">
        ikram hussain siyam
      </span>
    </h1>
  );
}
