"use client";
import Heading from "~/components/common/Heading";
import useTextScramble from "~/hooks/useTextScramble";
import "~/motion/breathing-text.css";
import "~/motion/fade-in.css";

export default function HeroTitle() {
  const textRef = useTextScramble<HTMLHeadingElement>();

  return (
    <Heading
      font="heading"
      size="h1"
      asChild
      className="mt-14 mb-7 whitespace-nowrap fade-in-bck tracking-tight"
    >
      <h1>
        <span ref={textRef} className="breathing-text [--wait:1s]">
          IKRam HuSSaiN
        </span>
      </h1>
    </Heading>
  );
}
