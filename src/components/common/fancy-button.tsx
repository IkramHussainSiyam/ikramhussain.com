import { useRef } from "react";
import { cn } from "~/lib/utils";
import { Button } from "../ui/button";

export default function FancyButton({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const animatedBorderRef = useRef<HTMLDivElement | null>(null);
  const animateBorder = (status: "add" | "remove") => {
    return () => {
      animatedBorderRef.current?.classList[status](
        "group-hover/cvBtn:border-primary"
      );
    };
  };

  return (
    <Button
      variant={"ghost"}
      className={cn(
        "relative text-xl px-10 py-7 w-auto group/cvBtn hover:bg-transparent border border-primary/75 rounded-[150%]",
        className
      )}
    >
      <div className="absolute top-0 left-0 w-full h-full border border-primary/75 rounded-[150%] -rotate-[4deg] transition-all"></div>
      <div
        ref={animatedBorderRef}
        onAnimationStart={animateBorder("add")}
        onAnimationEnd={animateBorder("remove")}
        className="absolute top-0 left-0 w-full h-full border border-transparent rounded-[150%] -rotate-[4deg] group-hover/cvBtn:animate-ping group-hover/cvBtn:repeat-[2] transition-all"
      ></div>
      {children}
    </Button>
  );
}
