"use client";
import Link from "next/link";

import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

type Props = {
  isLoggedIn: boolean;
};

const Navbar = ({ isLoggedIn }: Props) => {
  const links = [
    { href: "/", label: "Home", isPublic: true },
    { href: "/browse", label: "Browse", isPublic: true },
    { href: "/dashboard", label: "Dashboard", isPublic: false },
    { href: "/contact", label: "Contact", isPublic: true },
    { href: "/about", label: "About", isPublic: true },
  ];

  const path = usePathname();

  return (
    <nav className="flex items-center md:flex-row flex-col justify-center gap-8 md:gap-0">
      {links.map((link) => {
        if (!link.isPublic && !isLoggedIn) {
          return null;
        }
        return (
          <Link key={link.href} href={link.href}>
            <Button
              variant={path === link.href ? "linkAccent" : "link"}
              className="text-xl font-bold md:text-base"
            >
              {link.label}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
