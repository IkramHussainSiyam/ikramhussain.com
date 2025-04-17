import { Menu as Menubar } from "lucide-react";
import type { INavLink } from "~/types";
import Logo from "../common/Logo";
import { NavbarSheet } from "./navbarsheet";

export default function Navbar() {
  const navlinks: INavLink[] = [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: "Projects",
      href: "#projects",
    },
    {
      id: 3,
      name: "About",
      href: "#about",
    },
  ];

  return (
    <div className="flex items-center justify-between h-20 border-b-2 styled-border">
      <Logo />

      <NavbarSheet navlinks={navlinks}>
        <Menubar />
      </NavbarSheet>
    </div>
  );
}
