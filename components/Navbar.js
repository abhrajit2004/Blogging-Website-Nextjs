import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='mt-5'>
        <ul className='flex justify-end items-center gap-10 font-bold mx-4'>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/about"}>About</Link></li>
            <li><Link href={"/contact"}>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
