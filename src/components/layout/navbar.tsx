import { useEffect, useState } from "react";
import useTextScramble from "~/hooks/useTextScramble";
import { cn } from "~/lib/utils";
import type { INavLink } from "~/types";
import Container from "../common/container";
import Logo from "../common/Logo";
import Button from "../ui/button";
import { NavbarSheet } from "./navbarsheet";

export default function Navbar() {
  const [navStatus, setNavStatus] = useState<"show" | "style" | "hide">("show");
  const textRef = useTextScramble<HTMLButtonElement>({ hover: true });
  const navlinks: INavLink[] = [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: "Skills",
      href: "#skills",
    },
  ];

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setNavStatus("hide");
      }
      if (scrollY > 80) {
        setNavStatus("style");
      }
      if (scrollY === 0) {
        setNavStatus("show");
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "w-full border-b border-border/15 fixed top-0 left-1/2 -translate-x-1/2 z-[999] transition-all duration-500",
        navStatus === "hide" && "-top-full",
        navStatus === "style" && "w-[88%] top-4 bg-white/[0.97]",
        navStatus === "show" && "top-0"
      )}
    >
      <Container
        asChild
        className={cn(
          navStatus === "show" && "section-padding",
          navStatus === "style" && "mx-6"
        )}
      >
        <nav className="flex items-center justify-between h-20">
          <Logo />
          <NavbarSheet navlinks={navlinks}>
            {/* <Menubar className="stroke-primary" /> */}
            <Button>
              <span ref={textRef}>Menu</span>
            </Button>
          </NavbarSheet>
        </nav>
      </Container>
    </header>
  );
}
