import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center w-full h-20 p-3 text-white bg-slate-900 fixed'>
        <div>
            <h1 className='text-5xl font-signature ml-2'> Manoranjan </h1>
        </div>
        <ul className='flex flex-row space-x-14 mr-20 text-xl '>
            <Link to='/' >
            <li>Home</li>
            </Link>
            <Link to='/about' >
            <li>About me</li>
            </Link>
            <Link to='/projects' >
            <li>Projects</li>
            </Link>
            <Link to='/contact' >
            <li>Contact</li>
            </Link>
            
        </ul>
    </div>
  )
}

export default Navbar;