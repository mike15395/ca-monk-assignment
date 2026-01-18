import BlogMain from '@/components/BlogMain'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

function MainPage() {
  return (
    <div className='min-h-screen'>
        <Navbar/>
        <main>
            <Hero/>
            <BlogMain/>
        </main>
        <Footer/>
    </div>
  )
}

export default MainPage