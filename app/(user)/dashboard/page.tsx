import { Card } from '@/components/ui/card';
import { auth } from '@clerk/nextjs/server';
import React from 'react'

function page() {
  const {userId} = auth();
  return (
    <div className='flex flex-col gap-y-4 max-w-4xl'>
      <h2>Welcome to the Dashboard. (User = {userId})</h2>
      
      {/* User Post Placeholder */}
      <Card className='flex flex-col p-4 gap-y-1'>
        <h3 className='font-semibold text-lg underline mb-2'>Example Post Title</h3>
        <p>Here is some filler content for a post.</p>
        <small className='text-right'>
          Post by PLACEHOLDER_NAME
        </small>
        <small className='text-right'>
          Posted on PLACEHOLDER_DATE
        </small>
      </Card>

      {/* User Post Placeholder */}
      <Card className='flex flex-col p-4 gap-y-1'>
        <h3 className='font-semibold text-lg underline mb-2'>Example Post Title</h3>
        <p>Here is some filler content for a post.</p>
        <small className='text-right'>
          Post by PLACEHOLDER_NAME
        </small>
        <small className='text-right'>
          Posted on PLACEHOLDER_DATE
        </small>
      </Card>

      {/* User Post Placeholder */}
      <Card className='flex flex-col p-4 gap-y-1'>
        <h3 className='font-semibold text-lg underline mb-2'>Example Post Title</h3>
        <p>Here is some filler content for a post.</p>
        <small className='text-right'>
          Post by PLACEHOLDER_NAME
        </small>
        <small className='text-right'>
          Posted on PLACEHOLDER_DATE
        </small>
      </Card>
    </div>

  )
}

export default page