import { navLinks } from "@/config";
import { Button } from "@nextui-org/button";
import { NavbarContent, NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";
import { NavContainer } from "./nav-container";

export function MainNav() {
  return (
    <NavContainer>
      <NavbarContent className="hidden gap-2 md:flex" justify="center">
        {navLinks.map(({ label, href }) => (
          <NavbarItem key={href}>
            <Button
              variant="light"
              size="sm"
              className="text-base capitalize text-foreground/80"
            >
              <Link href={href}>{label}</Link>
            </Button>
          </NavbarItem>
        ))}
      </NavbarContent>
    </NavContainer>
  );
}
