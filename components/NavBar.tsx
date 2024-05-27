import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import SignOut from "./SignOut";
import { createClient } from "@/utils/supabase/server";

interface User {
  id?: string;
  email?: string;
}

const fetchUser = async (): Promise<User | null> => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user ? { id: user.id, email: user.email } : null;
};

export default async function NavBar() {
  const user = await fetchUser();

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
    <div className="w-full flex justify-end gap-x-4 py-2 pr-4">
      {NavLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          style={{ textDecoration: "none" }}
        >
          <Button>{link.name}</Button>
        </Link>
      ))}
      {user ? (
        <div className="flex gap-x-4">
          <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
          <SignOut />
        </div>
      ) : (
        <Link href="/login" style={{ textDecoration: "none" }}>
          <Button>Login</Button>
        </Link>
      )}
    </div>
  );
}
