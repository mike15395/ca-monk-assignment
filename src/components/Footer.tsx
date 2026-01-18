import React from 'react'

function Footer() {
  return (
    <footer className='flex justify-between items-center p-4 bg-gray-800 text-white'>
        <span>©2024 CA Monk.All rights reserved</span>

        <div className='flex gap-3'>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
        </div>
    </footer>
  )
}

export default Footer