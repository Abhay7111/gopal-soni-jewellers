import React from 'react'
import Navlr from './Navlr'
import Logo from '/d9de8a5f-c71f-421f-9f9c-408b4c630fba.pdf.png'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className=''>
        <div className='flex flex-col items-center justify-between px-5 w-full py-5 h-auto '>
            <div className=' h-full flex items-center justify-center'>
                <NavLink to={`/`}><img src={Logo} className='w-[55vw] sm:w-[15vw] ' /></NavLink>
            </div>
            <div className=' h-full flex flex-col justify-around items-end'>

            </div>
        </div>
    </div>
  )
}

export default Nav