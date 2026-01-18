import React from 'react'
import { Button } from './ui/button'
import AddBlog from './AddBlog'
import { GraduationCap } from 'lucide-react'

function Navbar() {
  return (
    <header className='bg-gray-300/30'>
        <div className='flex justify-between items-center p-4'>
            <div className='flex gap-2 items-center'>
              <GraduationCap className='text-shadow-gray-800'/>
              <h1 className='text-xl font-bold'>CA MONK</h1>
            </div>

           <AddBlog/>
        </div>
    </header>
  )
}

export default Navbar