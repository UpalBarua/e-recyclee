"use client";

import { Navbar } from "@nextui-org/navbar";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { MobileNav } from "./mobile-nav";
import { Button } from "@nextui-org/button";

type NavContainerProps = {
  children: ReactNode;
};

export function NavContainer({ children }: Readonly<NavContainerProps>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      height="3.5rem"
      maxWidth="xl"
      classNames={{
        base: "bg-content1/65 border-b backdrop-saturate-200 backdrop-blur-xl",
        wrapper: "px-2 sm:px-4 h-[4rem]",
      }}
    >
      <Link href="/" onClick={() => setIsMenuOpen(false)}>
        <Image
          src="/images/logo.png"
          alt="logo"
          height={60}
          width={120}
          priority
          quality={95}
          className="size-10 object-cover object-center"
        />
      </Link>
      {children}
      {/* <Link href="/">
        <Button color="primary">Donate</Button>
      </Link> */}
      <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </Navbar>
  );
}
