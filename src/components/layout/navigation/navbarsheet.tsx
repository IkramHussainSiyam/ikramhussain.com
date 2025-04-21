import { X } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import Button from "../../ui/button";
import Navlinks from "./navlinks";

export function NavbarSheet({ children }: { children: React.ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent closeBtn={false} className="p-0 rounded-none bg-primary">
        <div className="flex items-center justify-between p-8 border-b border-secondary/65">
          <SheetTitle className="font-display italic font-normal text-primary-foreground text-center text-4xl w-full tracking-wider">
            Navigate
          </SheetTitle>
          <SheetClose asChild>
            <Button size={"icon"} variant={"secondary"}>
              <X size={16} strokeWidth={3} className="text-primary" />
            </Button>
          </SheetClose>
        </div>

        <Navlinks />
      </SheetContent>
    </Sheet>
  );
}
