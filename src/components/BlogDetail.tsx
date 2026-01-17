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
   <section className='min-h-screen'>
{isBlogPending && <BlogDetailLoader/>}
    {!isBlogPending && blog && <Card>
      <CardHeader>
        {blog?.coverImage ? <img src={blog?.coverImage} alt="cover-image" className='w-full h-75' /> : <Skeleton className='w-250 h-100 rounded-2xl'/>}
         <span>{blog?.category?.map((ele)=><Badge variant={'secondary'}>{ele}</Badge>)} </span>
        <CardTitle className='text-7xl'>{blog?.title}</CardTitle>
        
        <span>{formatDate(blog?.date)}</span>
      </CardHeader>
      <CardContent>
      {blog?.content}
      </CardContent>
    </Card>}

    
    
     
     
   </section>
  )
}

export default BlogDetail