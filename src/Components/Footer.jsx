import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  const [open, setOpen] = useState(false);
  return (
    <div className='flex flex-col items-center justify-center w-full h-fit py-5'>
        <div className='flex flex-col items-center justify-start w-[60vw] gap-2'>
            <div className='w-full h-fit flex flex-col items-start justify-center gap-4 py-10'>
                <NavLink to="https://maps.app.goo.gl/QXYq9BayCTFde36h9?g_st=iw" className='w-full h-10 bg-zinc-400/50 flex items-center justify-start px-2 rounded-md text-zinc-600 text-sm hover:text-blue-600'><i class="ri-map-pin-line text-2xl px-2 text-gray-500"></i> Location</NavLink>
                <NavLink to="https://wa.me/7992430931" className='w-full h-10 bg-zinc-400/50 flex items-center justify-start px-2 rounded-md text-zinc-600 text-sm hover:text-blue-600'><i class="ri-whatsapp-line text-2xl px-2 text-green-500"></i> Whatsapp</NavLink>
                <NavLink to="tel:7992430931 " className='w-full h-10 bg-zinc-400/50 flex items-center justify-start px-2 rounded-md text-zinc-600 text-sm hover:text-blue-600'><i class="ri-phone-line text-2xl px-2 text-blue-500"></i> Phone</NavLink>
                <NavLink to="mailto:GOPALSONIJEWELLERS24K@GMAIL.com" className='w-full h-10 bg-zinc-400/50 flex items-center justify-start px-2 rounded-md text-zinc-600 text-sm hover:text-blue-600'><i class="ri-mail-line text-2xl px-2 text-gray-500"></i> Email</NavLink>
                <NavLink to="https://www.facebook.com/profile.php?id=61566358287625&mibextid=ZbWKwL" className='w-full h-10 bg-zinc-400/50 flex items-center justify-start px-2 rounded-md text-zinc-600 text-sm hover:text-blue-600'><i class="ri-facebook-fill text-2xl px-2 text-blue-500"></i> facebook</NavLink>
                <NavLink to="https://www.instagram.com/gsj_ktr?igsh=MTRzcG50OGdkM3Zjdw%3D%3D&utm_source=qr" className='w-full h-10 bg-zinc-400/50 flex items-center justify-start px-2 rounded-md text-zinc-600 text-sm hover:text-blue-600'><i class="ri-instagram-line text-2xl px-2 text-red-500"></i> Instagram</NavLink>
            </div>

    <div className='w-full h-14 relative flex items-center justify-center text-zinc-800'>
        <div className='relative w-[98%] rounded-xl flex items-center justify-center py-0.5 px-5 bg-white border border-zinc-400 '>
            <a href="https://separatedigital.netlify.app" target='_blank' className='text-xl uppercase font-bold text line-clamp-1 py-1 rounded-lg px-3 hover:bg-zinc-300 transition-all'>Made by : Separatedigital.com</a>
            <div  className=' w-12 h-full border-0 border-zinc-400 absolute top-0 right-0 rounded-full flex items-center justify-center'>
                <div onMouseEnter={()=>setOpen(true)} className='cursor-pointer hover:bg-zinc-300 relative size-10 transition-all rounded-full flex items-center justify-center'>
                <i className="ri-more-2-fill text-xl font-bold"></i>
                </div>
                <div onMouseLeave={()=>setOpen(false)} className={` ${open ? 'block absolute border border-zinc-400 w-80 h-auto max-h-[70vh] overflow-y-auto bg-white bottom-full right-0 mb-3 rounded-2xl' : 'hidden w-0 h-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'} transition-opacity `}>
                        <ul className='px-2 py-2 w-full flex flex-col gap-2 '>
                            <li><a target='_blank' href='tel:6388705984' className='text-sm font-medium uppercase hover:bg-zinc-300 transition-all rounded-md py-1.5 px-3 line-clamp-1 flex items-center justify-start gap-2'><i className="ri-smartphone-line text-xl font-medium"></i> +91 6388705984</a></li>
                            <li><a target='_blank' href='https://wa.me/+916388705984?text=Hello%20Separate%20Digital%20Advertising%20team.%20I%20am%20interested%20to%20buy%20your%20services%20so%20can%20you%20please%20send%20me%20your%20details%20Thank%20you%20%F0%9F%98%8A' className='text-sm font-medium uppercase hover:bg-zinc-300 transition-all rounded-md py-1.5 px-3 line-clamp-1 flex items-center justify-start gap-2'><i className="ri-whatsapp-line text-xl font-medium"></i> +91 6388705984</a></li>
                            <li><a target='_blank' href='mailto:info@separatedigital.com' className='text-sm font-medium uppercase hover:bg-zinc-300 transition-all rounded-md py-1.5 px-3 line-clamp-1 flex items-center justify-start gap-2'><i className="ri-mail-send-line text-xl font-medium"></i> info@separatedigital.com</a></li>
                            <li><a target='_blank' href='https://separatedigital.netlify.app/purchase' className='text-sm font-medium uppercase hover:bg-zinc-300 transition-all rounded-md py-1.5 px-3 line-clamp-1 flex items-center justify-start gap-2'><i className="ri-bank-card-line text-xl font-medium"></i> Purchase Website</a></li>
                            <li><a target='_blank' href='https://separatedigital.netlify.app/contact' className='text-sm font-medium uppercase hover:bg-zinc-300 transition-all rounded-md py-1.5 px-3 line-clamp-1 flex items-center justify-start gap-2'><i className="ri-contacts-line text-xl font-medium"></i> Contact Us</a></li>
                            <li><a target='_blank' href='https://separatedigital.netlify.app/blog' className='text-sm font-medium uppercase hover:bg-zinc-300 transition-all rounded-md py-1.5 px-3 line-clamp-1 flex items-center justify-start gap-2'><i className="ri-news-line text-xl font-medium"></i> Blogs</a></li>
                        </ul>
                </div>

            </div>
        </div>
    </div>

        </div>
    </div>
  )
}

export default Footer