import React from 'react'
import { NavLink } from 'react-router-dom'

function Heritage() {
  return (
    <div className='relative'>
        <div className='w-full py-10 h-fit'>
            <img src="https://manubhai.in/images/new-home/2022/heritage/heritage-background.jpg" className='w-full h-full hidden sm:block' />
            <div className='w-[95vw] sm:w-[40vw] sm:h-[92%] relative sm:absolute sm:top-1/2 sm:left-[50%] sm-translate-x-1/2 sm:-translate-y-1/2 flex items-center justify-center gap-3 flex-wrap'>
            
                <h1 className='w-full text-[5vw] sm:text-[2.5vw] uppercase font-bold text-center'>Heritage</h1>
                <div className=' w-[30%]'>
                    <NavLink to="/collections"><img src="https://manubhai.in/images/new-home/2022/heritage/01-rings.jpg" /></NavLink>
                    <p className='text-base font-semibold uppercase w-full text-center mt-3'>Rings</p>
                </div>
                <div className=' w-[30%]'>
                    <NavLink to="/collections"><img src="https://manubhai.in/images/new-home/2022/heritage/02-earrings.jpg" /></NavLink>
                    <p className='text-base font-semibold uppercase w-full text-center mt-3'>Earrings</p>
                </div>
                <div className=' w-[30%]'>
                    <NavLink to="/collections"><img src="https://manubhai.in/images/new-home/2022/heritage/03-bangles.jpg" /></NavLink>
                    <p className='text-base font-semibold uppercase w-full text-center mt-3'>Bangles</p>
                </div>
                <div className=' w-[30%]'>
                    <NavLink to="/collections"><img src="https://manubhai.in/images/new-home/2022/heritage/04-antique-sets.jpg" /></NavLink>
                    <p className='text-base font-semibold uppercase w-full text-center mt-3'>Antique Sets</p>
                </div>
                <div className=' w-[30%]'>
                    <NavLink to="/collections"><img src="https://manubhai.in/images/new-home/2022/heritage/05-antique-chokers.jpg" /></NavLink>
                    <p className='text-base font-semibold uppercase w-full text-center mt-3'>Choker Sets</p>
                </div>
                <div className=' w-[30%]'>
                    <NavLink to="/collections"><img src="https://manubhai.in/images/new-home/2022/heritage/06-maangtika.jpg" /></NavLink>
                    <p className='text-base font-semibold uppercase w-full text-center mt-3'>Maangtika</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Heritage