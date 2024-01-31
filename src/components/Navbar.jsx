import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to='/' className='w-10 h10 rounded-lg bg-white items-center justify-center flex font-bolds shadow-md'>
            <p className='blue-gradient'>JM</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to='/about' className={({isActive})=>isActive ? 'text-black-500' : 'text-blue-500'} >About</NavLink>
            <NavLink to='/projects' className={({isActive})=>isActive ? 'text-black-500' : 'text-red-500'} >Projects</NavLink>
            <NavLink to='/contact' className={({isActive})=>isActive ? 'text-black-500' : 'text-green-500'} >Contact</NavLink>
        </nav>
    </header>
  )
}

export default Navbar