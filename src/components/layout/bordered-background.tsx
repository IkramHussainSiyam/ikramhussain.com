import { cn } from "~/lib/utils";
import "~/motion/bg-drip.css";

export function BorderedBackground() {
  return (
    <>
      <div className="hidden lg:block pointer-events-none bg-none lg:mx-16 xl:mx-24 lg:w-[calc(100%-8rem)] xl:w-[calc(100%-12rem)] min-h-screen border-x border-border/15 fixed top-0 left-0 -z-[9999]"></div>
    </>
  );
}

export function SectionBorderBG({
  className,
  ...props
}: {} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "hidden 2xl:block absolute top-0 left-1/2 -translate-x-1/2 -z-[9999] border-x border-border/15 w-[150px] h-full opacity-0 sm:opacity-100 pointer-events-none bg-none",
        className
      )}
    ></div>
  );
}
