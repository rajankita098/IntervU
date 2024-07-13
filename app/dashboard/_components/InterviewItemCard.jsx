import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function InterviewItemCard({interview}) {
  return (
    <div className='border shadow-sm rounded-lg p-3 m-3'>
        <h2 className='font-bold text-primary '>{interview?.jobPosition}</h2>
        <h2 className='text-sm text-gray-600 '>{interview?.jobExperience} Year of Experience</h2>
        <h2 className='text-sm text-gray-400'>Created At: {interview?.createdAt}</h2>
        <div className='gap-3 flex justify-between mt-3'>
          <Link href={'/dashboard/interview/'+interview?.mockId+'/feedback'}>
            <Button size="sm" variant="outline" className="w-full">Feedback</Button>
            </Link>

            <Link href={'/dashboard/interview/'+interview?.mockId+'/'}>
            <Button size="sm" className="w-full" >start</Button>
            </Link>
        </div>
    </div>
  )
}

export default InterviewItemCard