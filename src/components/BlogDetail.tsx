import React, { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { formatDate } from '@/utils/formattedDate'
import { useQuery } from '@tanstack/react-query'
import BlogDetailLoader from './loaders/BlogDetailLoader'
import { Skeleton } from './ui/skeleton'

function BlogDetail({blogId,setBlogId}) {

 

   const {isPending:isBlogPending,error:blogError,data:blog}=useQuery({
     queryKey:['blog',blogId],
     queryFn:()=>fetch(`http://localhost:3001/blogs/${blogId}`).then((res)=>{
     return  res.json();
      
     }),
     enabled:!!blogId
   })
 
 

if(blogError) return 'Something Went Wrong!'+blogError.message

  return (
   <section className=' bg-white rounded-2xl w-full h-full'>
{isBlogPending && <BlogDetailLoader/>}
    {!isBlogPending && blog && <Card>
      <CardHeader>
        {blog?.coverImage ? <img src={blog?.coverImage} alt="cover-image" className='w-full h-75' /> : <Skeleton className='w-250 h-100 rounded-2xl'/>}
         <div className='flex justify-between items-center'>
           <span>{blog?.category?.map((ele)=><Badge variant={'secondary'} className='text-gray-500 font-bold'>{ele}</Badge>)} </span>
           <span className='text-gray-600'>{formatDate(blog?.date)}</span>
         </div>
        <CardTitle className='text-5xl sm:text-7xl'>{blog?.title}</CardTitle>
        
        
      </CardHeader>
      <CardContent>
      {blog?.content}
      </CardContent>
    </Card>}

    
    
     
     
   </section>
  )
}

export default BlogDetail