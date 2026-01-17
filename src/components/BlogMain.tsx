import React from 'react'
import AllBlogs from './AllBlogs'
import BlogDetail from './BlogDetail'

function BlogMain() {
  return (
    <section className='container mx-auto  min-h-screen p-4'>
       <div className='flex gap-4'>
           <AllBlogs/>
           <BlogDetail/>
       </div>
    </section>
  )
}

export default BlogMain