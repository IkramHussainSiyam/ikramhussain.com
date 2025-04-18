"use client";
import UseTextScramble from "~/hooks/useTextScramble";
import "~/motion/fade-in.css";

export default function HeroTitle() {
  const textRef = UseTextScramble<HTMLHeadingElement>();

  return (
    <h1 className="whitespace-nowrap relative fade-in-bck">
      <span
        ref={textRef}
        className="block uppercase font-semibold tracking-[-0.055em] text-foreground leading-[1] text-[14rem]"
      >
        ikram hussain
      </span>
    </h1>
  );
}
