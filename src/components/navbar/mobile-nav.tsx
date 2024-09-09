import { navLinks } from "@/config";
import {
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Link from "next/link";
import * as React from "react";

type MobileNavProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function MobileNav({
  isMenuOpen,
  setIsMenuOpen,
}: Readonly<MobileNavProps>) {
  return (
    <React.Fragment>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden"
      />
      <NavbarMenu
        className="space-y-2 border border-foreground/10 bg-content1/65 py-6 backdrop-blur-xl backdrop-saturate-200"
        onClick={() => setIsMenuOpen(false)}
      >
        {navLinks.map(({ label, href }) => (
          <NavbarMenuItem key={href}>
            <Link href={href} className="w-full capitalize text-foreground/80">
              {label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </React.Fragment>
  );
}
