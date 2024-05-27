import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';
 
function NavBar() {
    const NavLinks = [
      {
        name: "Home",
        href: "/" 
      },
      {
        name: "Contact",
        href: "/contact" 
      },
      {
        name: "Signup",
        href: "/signup"
      }
    ];
  
    return (
      <div className='w-full flex justify-end gap-x-4 py-2'>
        {NavLinks.map((link) => (
          <Link key={link.name} href={link.href} style={{ textDecoration: 'none' }}>
            <Button>
              {link.name}
            </Button>
          </Link>
        ))}
      </div>
    );
  }
  
  export default NavBar;