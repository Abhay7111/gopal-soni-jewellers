import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-fit py-5'>
        <div className='flex flex-col items-center justify-start w-[60vw] gap-2'>
            <div className='hidden sm:block'>
            <ul className='w-full h-10 border-b border-zinc-600 flex items-center justify-center px-2'>
                <li><NavLink to="/collections" className='text-sm '>Engagement Rings</NavLink> <span className='px-3'>| </span></li>
                <li><NavLink to="/collections" className='text-sm '>Gold Necklace</NavLink> <span className='px-3'>| </span></li>
                <li><NavLink to="/collections" className='text-sm '>Gold Necklace Set with price</NavLink> <span className='px-3'>| </span></li>
                <li><NavLink to="/collections" className='text-sm '>Diamond Necklace</NavLink> <span className='px-3'>| </span></li>
                <li><NavLink to="/collections" className='text-sm '>Diamond Set</NavLink> <span className='px-3'>| </span></li>
                <li><NavLink to="/collections" className='text-sm '>Bridal Gold Jewellery Set</NavLink> <span className='px-3'>| </span></li>
                <li><NavLink to="/collections" className='text-sm '>Bridal Diamond Set</NavLink></li>
            </ul>
            <ul className='w-full h-20 border-b border-zinc-600 flex items-center justify-center flex-wrap px-2'>
                <li><NavLink to="/collections" className='text-sm '>Maharashtrian Jewellery</NavLink> <span className='px-3'>| </span></li>
                <li><NavLink to="/collections" className='text-sm '>Thushi</NavLink> <span className='px-3'>| </span></li>
                <li><NavLink to="/collections" className='text-sm '>Mohan Mala</NavLink> <span className='px-3'>| </span></li>
                <li><NavLink to="/collections" className='text-sm '>Maharashtrian Mangalsutra</NavLink> <span className='px-3'>| </span></li>
                <li><NavLink to="/collections" className='text-sm '>Gold Rings</NavLink> <span className='px-3'>| </span></li>
                <li><NavLink to="/collections" className='text-sm '>Gold Necklace Set</NavLink> <span className='px-3'>| </span></li>
                <li><NavLink to="/collections" className='text-sm '>Gold Mangalsutra</NavLink><span className='px-3'>| </span></li>
                <li><NavLink to="/collections" className='text-sm '>Gold Earrings</NavLink><span className='px-3'>| </span></li>
                <li><NavLink to="/collections" className='text-sm '>Gold Pendant Set</NavLink><span className='px-3'>| </span></li>
                <li><NavLink to="/collections" className='text-sm '>Gold Bangles</NavLink><span className='px-3'>| </span></li>
                <li><NavLink to="/collections" className='text-sm '>Gold Bracelet</NavLink><span className='px-3'>| </span></li>
                <li><NavLink to="/collections" className='text-sm '>Gold Pendant</NavLink><span className='px-3'>| </span></li>
                <li><NavLink to="/collections" className='text-sm '>Gold Kada</NavLink></li>
            </ul>
            </div>
            <div className='w-full h-fit flex flex-col items-start justify-center gap-4 py-10'>
                <NavLink to="https://maps.app.goo.gl/QXYq9BayCTFde36h9?g_st=iw" className='w-full h-10 bg-zinc-400/50 flex items-center justify-start px-2 rounded-md text-zinc-600 text-sm hover:text-blue-600'><i class="ri-map-pin-line text-2xl px-2 text-gray-500"></i> Location</NavLink>
                <NavLink to="https://wa.me/7992430931" className='w-full h-10 bg-zinc-400/50 flex items-center justify-start px-2 rounded-md text-zinc-600 text-sm hover:text-blue-600'><i class="ri-whatsapp-line text-2xl px-2 text-green-500"></i> Whatsapp</NavLink>
                <NavLink to="tel:7992430931 " className='w-full h-10 bg-zinc-400/50 flex items-center justify-start px-2 rounded-md text-zinc-600 text-sm hover:text-blue-600'><i class="ri-phone-line text-2xl px-2 text-blue-500"></i> Phone</NavLink>
                <NavLink to="mailto:GOPALSONIJEWELLERS24K@GMAIL.com" className='w-full h-10 bg-zinc-400/50 flex items-center justify-start px-2 rounded-md text-zinc-600 text-sm hover:text-blue-600'><i class="ri-mail-line text-2xl px-2 text-gray-500"></i> Email</NavLink>
                <NavLink to="https://www.facebook.com/profile.php?id=61566358287625&mibextid=ZbWKwL" className='w-full h-10 bg-zinc-400/50 flex items-center justify-start px-2 rounded-md text-zinc-600 text-sm hover:text-blue-600'><i class="ri-facebook-fill text-2xl px-2 text-blue-500"></i> facebook</NavLink>
                <NavLink to="https://www.instagram.com/gsj_ktr?igsh=MTRzcG50OGdkM3Zjdw%3D%3D&utm_source=qr" className='w-full h-10 bg-zinc-400/50 flex items-center justify-start px-2 rounded-md text-zinc-600 text-sm hover:text-blue-600'><i class="ri-instagram-line text-2xl px-2 text-red-500"></i> Instagram</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Footer