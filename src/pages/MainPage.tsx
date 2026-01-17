import BlogMain from '@/components/BlogMain'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

function MainPage() {
  return (
    <div >
        <Navbar/>
        <main>
            <BlogMain/>
        </main>
        <Footer/>
    </div>
  )
}

export default MainPage