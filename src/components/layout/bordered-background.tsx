import "~/motion/bg-drip.css";

export default function BorderedBackground() {
  return (
    <>
      <div className="pointer-events-none bg-none w-[150px] min-h-screen border-x border-border/15 fixed position-screen-center -z-[9999]"></div>{" "}
      <div className="pointer-events-none bg-none mx-24 w-[calc(100%-12rem)] min-h-screen border-x border-border/15 fixed top-0 left-0 -z-[9999]"></div>
    </>
  );
}
