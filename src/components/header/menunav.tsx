import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Navbar from "./navbar";
import Image from "next/image";

type Props = {
  isLoggedIn: boolean;
};

const NavMenu = ({ isLoggedIn }: Props) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent side={"left"} className="flex flex-col gap-8">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 justify-center">
            <Image src="/Logo.png" alt="Logo" width={150} height={150} />
          </SheetTitle>
        </SheetHeader>
        <Navbar isLoggedIn={isLoggedIn} />
      </SheetContent>
    </Sheet>
  );
};

export default NavMenu;
