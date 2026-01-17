import React, { useState } from 'react'
import AllBlogs from './AllBlogs'
import BlogDetail from './BlogDetail'

function BlogMain() {
  const [blogId,setBlogId]=useState('1')
  return (
    <section className='container mx-auto  min-h-screen p-4'>
       <div className='flex flex-col sm:flex-row gap-4'>
           <AllBlogs blogId={blogId} setBlogId={setBlogId}/>
           <BlogDetail blogId={blogId} setBlogId={setBlogId}  />
       </div>
    </section>
  )
}

export default BlogMain