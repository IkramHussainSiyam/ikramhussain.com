import { X } from "lucide-react";
import { Link } from "react-router";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import type { INavLink } from "~/types";

export function NavbarSheet({
  children,
  navlinks,
}: {
  children: React.ReactNode;
  navlinks?: INavLink[];
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        closeBtn={false}
        className="p-0 rounded-xl sm:w-[calc(100%-24px)]"
      >
        <div className="flex items-center justify-between px-5 py-2.5 border-b border-border/20">
          <SheetTitle className="uppercase text-base text-primary">
            menu
          </SheetTitle>
          <SheetClose>
            <X size={16} className="text-muted-foreground" />
          </SheetClose>
        </div>
        <div className="px-5 py-2.5">
          <ul className="space-y-1.5 font-semibold">
            {navlinks?.map((link) => (
              <li
                key={link.id}
                className="text-primary hover:text-primary/70 text-2xl"
              >
                <Link to={link.href}>
                  <SheetClose>{link.name}</SheetClose>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
