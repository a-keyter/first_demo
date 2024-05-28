import Link from 'next/link';
import React from 'react'

function UserNav() {
  const UserPages = [
    {
      title: "Dashboard",
      href: "/dashboard"
    },
    {
      title: "Create Post",
      href: "/create"
    }
  ];

  return (
    <div className='w-[250px] p-4 flex flex-col gap-y-4 bg-slate-300 h-screen'>
      <p className='font-bold'>User Navigation</p>
      {UserPages.map((page, index) => (
        <Link
          key={index}
          href={page.href}
          className='p-2 rounded hover:bg-slate-400 transition-colors duration-300'
        >
          {page.title}
        </Link>
      ))}
    </div>
  )
}

export default UserNav
