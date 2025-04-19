import "~/motion/bg-drip.css";

export default function BorderedBackground() {
  return (
    <>
      <div className="pointer-events-none bg-none w-[150px] sm:w-[50px] md:w-[50px] lg:w-[100px] min-h-screen border-x border-border/15 fixed position-screen-center -z-[9999]"></div>{" "}
      <div className="pointer-events-none bg-none mx-24 lg:mx-12 md:mx-8 sm:mx-4 w-[calc(100%-12rem)] sm:w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-6rem)] min-h-screen border-x border-border/15 fixed top-0 left-0 -z-[9999]"></div>
    </>
  );
}
