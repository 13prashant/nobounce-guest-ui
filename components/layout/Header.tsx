"use client";
import Link from "next/link";
import Logo from "../common/Logo";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { navLinks } from "./helpers";
import MobileNav from "./MobileNav";
import useOutSideClick from "@/hooks/useOutSideClick";
import { useState } from "react";

export default function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const ref = useOutSideClick(() => {
    setShowMobileNav(false);
  });

  return (
    <header className="border-b py-4 sticky top-0 z-50 backdrop-filter backdrop:blur-lg bg-background/90">
      <div className="container py-0 flex justify-between items-center">
        <Logo />
        <nav className="hidden sm:flex gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              className="hover:text-secondary duration-300"
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        {showMobileNav && (
          <MobileNav
            showMobileNav={showMobileNav}
            setShowMobileNav={setShowMobileNav}
            ref={ref}
          />
        )}
        <div className="flex gap-4 items-center">
          <Button>Login</Button>
          <Menu
            className="sm:hidden cursor-pointer"
            onClick={() => setShowMobileNav(true)}
          />
        </div>
      </div>
    </header>
  );
}
