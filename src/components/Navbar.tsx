import React from 'react'
import { Button } from './ui/button'
import AddBlog from './AddBlog'

function Navbar() {
  return (
    <header>
        <div className='flex justify-between items-center p-4'>
            <h1>CA MONK</h1>

           <AddBlog/>
        </div>
    </header>
  )
}

export default Navbar