import React from 'react'
import { Skeleton } from '../ui/skeleton'

function BlogDetailLoader() {
  return (
    <div className='flex flex-col justify-center items-center '>
        <Skeleton className='w-200 h-100 rounded-2xl'/>
        <Skeleton className='w-200 h-10'/>
        <Skeleton className='w-200 h-30'/>
    </div>
  )
}

export default BlogDetailLoader