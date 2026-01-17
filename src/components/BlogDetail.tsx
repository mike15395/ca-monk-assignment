import React, { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { formatDate } from '@/utils/formattedDate'
import { useQuery } from '@tanstack/react-query'

function BlogDetail({blogId,setBlogId}) {

 

   const {isPending:isBlogPending,error:blogError,data:blog}=useQuery({
     queryKey:['blog',blogId],
     queryFn:()=>fetch(`http://localhost:3001/blogs/${blogId}`).then((res)=>{
     return  res.json();
      
     }),
     enabled:!!blogId
   })
 
 
if (isBlogPending) return 'Loading Blog Details...'
if(blogError) return 'Something Went Wrong!'+blogError.message

  return (
   <section className='min-h-screen'>

    {blog && <Card>
      <CardHeader>
         <img src={blog?.coverImage} alt="cover-image" className='w-full h-75' />
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