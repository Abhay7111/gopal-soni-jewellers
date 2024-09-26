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
    <div className='w-full sm:h-[90vh] p-5 flex items-center justify-between overflow-hidden relative'>
        <div className='flex flex-col h-full gap-5 items-center justify-center relative'>
            <p className='relative sm:text-[5vw] text-[11vw] font-semibold text-zinc-100 w-full sm:w-fit text-start z-20'>Diamonds</p>
            <div className='w-fit hidden sm:block'>
                <Autoscroll1/>
            </div>
            <div className='w-fit block sm:hidden h-[75vh] pt-40 '>
              <Autoscrollsm/>
            </div>
        </div>
        <div className='w-full h-full'>
            <img src="https://manubhai.in/images/new-home/2022/diamond/diamond-background2.jpg" className='absolute top-0 right-0 w-full h-full object-cover object-bottom rounded-md' />
        </div>
    </div>
  )
}

export default Diamonds