import React from 'react'
import Autoscroll1 from './Autoscroll1'
import Autoscrollsm from './Autoscrollsm'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Diamonds() {
  return (
    <div className='w-full sm:h-[90vh] p-5 flex items-center justify-between overflow-hidden relative rounded-2xl sm:rounded-sm'>
        <div className='flex flex-col h-full gap-5 items-center justify-center relative'>
            <p className='relative sm:text-[5vw] text-[11vw] font-semibold text-zinc-100 w-full sm:w-fit text-start z-20 hidden sm:block uppercase'>Diamonds</p>
            <div className='w-fit hidden sm:block'>
                <Autoscroll1/>
            </div>
        </div>
        <div className='w-full h-full'>
            <h1 className='sm:hidden block w-full text-center text-white text-[10vw] font-bold uppercase relative z-10'>Diamonds</h1>
            <div className='sm:hidden block relative z-10 w-full border border-dashed overflow-x-auto'>
              <Autoscrollsm/>
            </div>
            <img src="https://manubhai.in/images/new-home/2022/diamond/diamond-background2.jpg" className='absolute top-0 right-0 w-full h-full object-cover object-bottom rounded-md' />
        </div>
    </div>
  )
}

export default Diamonds