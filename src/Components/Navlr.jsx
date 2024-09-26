import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navlr() {
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [open5, setOpen5] = useState(false)
    const [open6, setOpen6] = useState(false)
    const [open7, setOpen7] = useState(false)
    const [open8, setOpen8] = useState(false)
    const [open9, setOpen9] = useState(false)
  return (
    <div className='w-full bg-blue-600 flex items-center justify-between px-5'>
        <ul className='flex items-center justify-start h-9 text-sm'>
            <li onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)} className='relative'><NavLink className={`py-2 px-4 relative hover:bg-orange-400 text-zinc-100`} to={`/gold`}>Gold <i class="ri-arrow-down-s-fill"></i></NavLink>
                    {/* ul */}
                    <ul className={`${open ? 'top-full w-60 h-[50vh]' : 'top-full h-0'} transition-all flex flex-col items-start justify-start gap-4 absolute mt-2 left-0 w-60 bg-zinc-200 overflow-y-auto `}>
                        <br />
                        <li><NavLink to={`/ring`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Ring</NavLink></li>
                        <li><NavLink to={`/Necklace Set`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Necklace Set</NavLink></li>
                        <li><NavLink to={`/Mangalsutra`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Mangalsutra</NavLink></li>
                        <li><NavLink to={`/Earrings`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Earrings</NavLink></li>
                        <li><NavLink to={`/Pendant set`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Pendant set</NavLink></li>
                        <li><NavLink to={`/Bangles`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Bangles</NavLink></li>
                        <li><NavLink to={`/Bracelet`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Bracelet</NavLink></li>
                        <li><NavLink to={`/Pendant`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Pendant</NavLink></li>
                        <li><NavLink to={`/Gold Kada`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Gold Kada</NavLink></li>
                        <li><NavLink to={`/Mohan Mala`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Mohan Mala</NavLink></li>
                        <li><NavLink to={`/Thushi`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Thushi</NavLink></li>
                        <li><NavLink to={`/Maharashtrian Jewellery`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Maharashtrian Jewellery</NavLink></li>
                        <li><NavLink to={`/View all`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>View all</NavLink></li>
                    </ul>
            </li>
            <li onMouseEnter={()=>setOpen2(true)} onMouseLeave={()=>setOpen2(false)} className='relative'><NavLink className={`py-2 px-4 relative hover:bg-orange-400 text-zinc-100`} to={`/Diamond`}>Diamond <i class="ri-arrow-down-s-fill"></i></NavLink>
                    {/* ul */}
                    <ul className={`${open2 ? 'top-full w-60 h-[20vh]' : 'top-full h-0'} transition-all flex flex-col items-center justify-start gap-4 absolute mt-2 left-0 w-60 bg-zinc-200 overflow-y-auto`}>
                        <p className='font-semibold w-full text-center pt-4'>Shop by Collection</p>
                        <li><NavLink to={`/Sham Setting`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Sham Setting</NavLink></li>
                        <li><NavLink to={`/Raison Detre`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Raison Detre</NavLink></li>
                        <li><NavLink to={`/Magraise`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Magraise</NavLink></li>
                    </ul>
            </li>
            <li onMouseEnter={()=>setOpen3(true)} onMouseLeave={()=>setOpen3(false)} className='relative'><NavLink className={`py-2 px-4 relative hover:bg-orange-400 text-zinc-100`} to={`/Antique`}>Antique <i class="ri-arrow-down-s-fill"></i></NavLink>
                    {/* ul */}
                    <ul className={`${open3 ? 'top-full w-60 h-[50vh]' : 'top-full h-0'} transition-all flex flex-col items-start justify-start gap-4 absolute mt-2 left-0 w-60 bg-zinc-200 overflow-y-auto `}>
                        <br />
                        <li><NavLink to={`/ring`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Ring</NavLink></li>
                        <li><NavLink to={`/Necklace Set`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Necklace Set</NavLink></li>
                        <li><NavLink to={`/Mangalsutra`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Mangalsutra</NavLink></li>
                        <li><NavLink to={`/Earrings`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Earrings</NavLink></li>
                        <li><NavLink to={`/Pendant set`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Pendant set</NavLink></li>
                        <li><NavLink to={`/Bangles`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Bangles</NavLink></li>
                        <li><NavLink to={`/Bracelet`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Bracelet</NavLink></li>
                        <li><NavLink to={`/Pendant`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Pendant</NavLink></li>
                        <li><NavLink to={`/Gold Kada`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Gold Kada</NavLink></li>
                        <li><NavLink to={`/Mohan Mala`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Mohan Mala</NavLink></li>
                        <li><NavLink to={`/Thushi`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Thushi</NavLink></li>
                        <li><NavLink to={`/Maharashtrian Jewellery`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Maharashtrian Jewellery</NavLink></li>
                        <li><NavLink to={`/View all`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>View all</NavLink></li>
                    </ul>
            </li>
                {/*    --------------   |   nav
                       --------------   |   nav   */}
            <li onMouseEnter={()=>setOpen4(true)} onMouseLeave={()=>setOpen4(false)} className='relative'><NavLink className={`py-2 px-4 relative hover:bg-orange-400 text-zinc-100`} to={`/Rings`}>Rings <i class="ri-arrow-down-s-fill"></i></NavLink>
                    {/* ul */}
                    <ul className={`${open4 ? 'top-full w-96 h-[25vh]' : 'top-full h-0'} transition-all flex items-start justify-between px-3 absolute mt-2 left-0 w-60 bg-zinc-200 overflow-y-auto`}>
                        <div className='flex flex-col items-start gap-1 w-[50%]'>
                            <br />
                            <li className='h-9 flex items-center justify-center w-40 mx-3 hover:bg-gray-300 border-b border-zinc-400'><NavLink to={`/Gold Rings`} className={`w-full h-full px-4 py-1`} >Gold Rings</NavLink></li>
                            <li className='h-9 flex items-center justify-center w-40 mx-3 hover:bg-gray-300 border-b border-zinc-400'><NavLink to={`/Diamond Rings`} className={`w-full h-full px-4 py-1`} >Diamond Rings</NavLink></li>
                            <li className='h-9 flex items-center justify-center w-40 mx-3 hover:bg-gray-300 border-b border-zinc-400'><NavLink to={`/Antique Rings`} className={`w-full h-full px-4 py-1`} >Antique Rings</NavLink></li>
                            <li className='h-9 flex items-center justify-center w-40 mx-3 hover:bg-gray-300 border-b border-zinc-400'><NavLink to={`/Engagement Rings`} className={`w-full h-full px-4 py-1`} >Engagement Rings</NavLink></li>
                        </div>
                        <div className=' flex flex-col items-start justify-center gap-2'>
                            <br />
                            <li><NavLink to={`/Rings for Women`} className={`px-3 py-1 mx-3 hover:bg-gray-300`}>Rings for Women</NavLink></li>
                            <li><NavLink to={`/Rings for men`} className={`px-3 py-1 mx-3 hover:bg-gray-300`}>Rings for men</NavLink></li>
                        </div>
                    </ul>
            </li>
                {/*    --------------   |   nav
                       --------------   |   nav   */}
            <li onMouseEnter={()=>setOpen5(true)} onMouseLeave={()=>setOpen5(false)} className='relative'><NavLink className={`py-2 px-4 relative hover:bg-orange-400 text-zinc-100`} to={`/Earrings`}>Earrings <i class="ri-arrow-down-s-fill"></i></NavLink>
                    {/* ul */}
                    <ul className={`${open5 ? 'top-full w-96 h-[25vh]' : 'top-full h-0'} transition-all flex items-start justify-between px-3 absolute mt-2 left-0 w-60 bg-zinc-200 overflow-y-auto`}>
                        <div className='flex flex-col items-start gap-1 w-[50%]'>
                            <br />
                            <li className='h-9 flex items-center justify-center w-40 mx-3 hover:bg-gray-300 border-b border-zinc-400'><NavLink to={`/Gold Earrings`} className={`w-full h-full px-4 py-1`} >Gold Earrings</NavLink></li>
                            <li className='h-9 flex items-center justify-center w-40 mx-3 hover:bg-gray-300 border-b border-zinc-400'><NavLink to={`/Diamond Earrings`} className={`w-full h-full px-4 py-1`} >Diamond Earrings</NavLink></li>
                            <li className='h-9 flex items-center justify-center w-40 mx-3 hover:bg-gray-300 border-b border-zinc-400'><NavLink to={`/Antique Earrings`} className={`w-full h-full px-4 py-1`} >Antique Earrings</NavLink></li>
                        </div>
                        <div className=' flex flex-col items-start justify-center gap-2'>
                            <br />
                            <li><NavLink to={`/Chandbali Earrings`} className={`px-3 py-1 mx-3 hover:bg-gray-300`}>Chandbali Earrings</NavLink></li>
                            <li><NavLink to={`/Jhumka Earrings`} className={`px-3 py-1 mx-3 hover:bg-gray-300`}>Jhumka Earrings</NavLink></li>
                            <li><NavLink to={`/Stud Earrings`} className={`px-3 py-1 mx-3 hover:bg-gray-300`}>Stud Earrings</NavLink></li>
                        </div>
                    </ul>
            </li>
            <li onMouseEnter={()=>setOpen6(true)} onMouseLeave={()=>setOpen6(false)} className='relative'><NavLink className={`py-2 px-4 relative hover:bg-orange-400 text-zinc-100`} to={`/Mangalsutra`}>Mangalsutra <i class="ri-arrow-down-s-fill"></i></NavLink>
                    {/* ul */}
                    <ul className={`${open6 ? 'top-full w-60 h-[30vh]' : 'top-full h-0'} transition-all flex flex-col items-start justify-start gap-4 absolute mt-2 left-0 w-60 bg-zinc-200 overflow-y-auto `}>
                        <br />
                        <li><NavLink to={`/Gold Mangalsutra`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Gold Mangalsutra</NavLink></li>
                        <li><NavLink to={`/Diamond Mangalsutra`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Diamond Mangalsutra</NavLink></li>
                        <li><NavLink to={`/Antique Mangalsutra`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Antique Mangalsutra</NavLink></li>
                        <li><NavLink to={`/Maharashtrian Mangalsutra`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Maharashtrian Mangalsutra</NavLink></li>
                        <li><NavLink to={`/Wedding Mangalsutra`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Wedding Mangalsutra</NavLink></li>
                        <li><NavLink to={`/22 Carat Gold Mangalsutra`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}> <span className='text-[0.6rem] font-medium'>22</span> Carat Gold Mangalsutra</NavLink></li>
                    </ul>
            </li>
            <li onMouseEnter={()=>setOpen7(true)} onMouseLeave={()=>setOpen7(false)} className='relative'><NavLink className={`py-2 px-4 relative hover:bg-orange-400 text-zinc-100`} to={`/Bangles`}>Bangles <i class="ri-arrow-down-s-fill"></i></NavLink>
                    {/* ul */}
                    <ul className={`${open7 ? 'top-full w-60 h-[17vh]' : 'top-full h-0'} transition-all flex flex-col items-start justify-start gap-4 absolute mt-2 left-0 w-60 bg-zinc-200 overflow-y-auto `}>
                        <br />
                        <li><NavLink to={`/Gold Bangles`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Gold Bangles</NavLink></li>
                        <li><NavLink to={`/Diamond Bangles`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Diamond Bangles</NavLink></li>
                        <li><NavLink to={`/Antique Bangles`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Antique Bangles</NavLink></li>
                    </ul>
            </li>
            <li onMouseEnter={()=>setOpen8(true)} onMouseLeave={()=>setOpen8(false)} className='relative'><NavLink className={`py-2 px-4 relative hover:bg-orange-400 text-zinc-100`} to={`/Polki Jewellery`}>Polki Jewellery <i class="ri-arrow-down-s-fill"></i></NavLink>
                    {/* ul */}
                    <ul className={`${open8 ? 'top-full w-44 h-[17vh]' : 'top-full h-0'} transition-all flex flex-col items-start justify-start gap-4 absolute mt-2 left-0 w-60 bg-zinc-200 overflow-y-auto `}>
                        <br />
                        <li><NavLink to={`/Jaipur jazz`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Jaipur jazz</NavLink></li>
                        <li><NavLink to={`/Polki jazz`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Polki jazz</NavLink></li>
                        <li><NavLink to={`/View all`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>View all</NavLink></li>
                    </ul>
            </li>
            <li onMouseEnter={()=>setOpen9(true)} onMouseLeave={()=>setOpen9(false)} className='relative'><NavLink className={`py-2 px-4 relative hover:bg-orange-400 text-zinc-100`} to={`/Collection`}>Collection <i class="ri-arrow-down-s-fill"></i></NavLink>
                    {/* ul */}
                    <ul className={`${open9 ? 'top-full w-60 h-[56vh]' : 'top-full h-0'} transition-all flex flex-col items-start justify-start gap-4 absolute mt-2 left-0 w-60 bg-zinc-200 overflow-y-auto `}>
                        <br />
                        <li><NavLink to={`/Bridal Edit 2024`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Bridal Edit 2024</NavLink></li>
                        <li><NavLink to={`/Bridal 2023-24`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Bridal 2023-24</NavLink></li>
                        <li><NavLink to={`/Madhuban`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Madhuban</NavLink></li>
                        <li><NavLink to={`/7 Vows 7 Wows`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>7 Vows 7 Wows</NavLink></li>
                        <li><NavLink to={`/Bombay Chic`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Bombay Chic</NavLink></li>
                        <li><NavLink to={`/Italian Delight`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Italian Delight</NavLink></li>
                        <li><NavLink to={`/Bombay Bride`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Bombay Bride</NavLink></li>
                        <li><NavLink to={`/Startdust`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Startdust</NavLink></li>
                        <li><NavLink to={`/Diamond Diva`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Diamond Diva</NavLink></li>
                        <li><NavLink to={`/Daily Wear Essentials`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Daily Wear Essentials</NavLink></li>
                        <li><NavLink to={`/Signature Series`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Signature Series</NavLink></li>
                        <li><NavLink to={`/Miraas Collection`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Miraas Collection</NavLink></li>
                        <li><NavLink to={`/Limited Edition`} className={`px-5 py-2 mx-3 hover:bg-gray-300`}>Limited Edition</NavLink></li>
                    </ul>
            </li>
        </ul>
    </div>
  )
}

export default Navlr