import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import SignOut from "./SignOut";
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
    <div className="w-full flex flex-1 justify-end gap-x-4 py-2 pr-4">
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
          <SignInButton mode="modal" forceRedirectUrl={"/dashboard"}/>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
     </div>
  );
}
