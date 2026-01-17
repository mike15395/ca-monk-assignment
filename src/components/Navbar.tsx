import React from 'react'
import { Button } from './ui/button'

function Navbar() {
  return (
    <header>
        <div className='flex justify-between items-center p-4'>
            <h1>CA MONK</h1>

            <div className='flex gap-5'>
               
                <Button variant={'outline'} className='cursor-pointer'>Create New Blog</Button>
            </div>
        </div>
    </header>
  )
}

export default Navbar