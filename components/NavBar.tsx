import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function NavBar() {
  const NavLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div className="w-full flex justify-center md:justify-end gap-x-4 py-2 pr-4">
      {NavLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          style={{ textDecoration: "none" }}
        >
          <Button>{link.name}</Button>
        </Link>
      ))}
      <SignedOut>
        <div className="bg-slate-800 text-white rounded-md items-center px-4 py-2">
          <SignInButton mode="modal" forceRedirectUrl={"/dashboard"} />
        </div>
      </SignedOut>
      <SignedIn>
        <Link
          href={"/dashboard"}
          style={{ textDecoration: "none" }}
        >
          <Button>Dashboard</Button>
        </Link>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </div>
  );
}
