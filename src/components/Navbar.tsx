import React from 'react'

function Navbar() {
  return (
    <header>
        <div className='flex justify-between items-center p-4'>
            <h1>CA MONK</h1>

            <div className='flex gap-5'>
                <span>View All</span>
                <span>Create New Blog</span>
            </div>
        </div>
    </header>
  )
}

export default Navbar