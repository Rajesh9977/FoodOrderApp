import React from 'react'

function Header() {
  return (
    <div className='bg-orange-500 w-full h-8 flex'>
      <img></img>
      <ul className='flex justify-between'>
        <li>home</li>
        <li>cart</li>
        <li>contact</li>
      </ul>
    </div>
  )
}

export default Header
