import React, { useState } from 'react'
import AllBlogs from './AllBlogs'
import BlogDetail from './BlogDetail'

function BlogMain() {
  const [blogId,setBlogId]=useState('1')
  return (
    <section className='w-full max-w-full   p-4 bg-gray-200 overflow-x-hidden'>
        <div className="container mx-auto min-h-screen p-4">
       <div className='flex flex-col sm:flex-row gap-4 w-full'>
         <div className="w-full sm:w-[35%] shrink-0">
           <AllBlogs blogId={blogId} setBlogId={setBlogId}/>
           </div>
           <div className="w-full sm:w-[65%] min-w-0">
           <BlogDetail blogId={blogId} setBlogId={setBlogId}  />
           </div>
       </div>
       </div>
    </section>
  )
}

export default BlogMain