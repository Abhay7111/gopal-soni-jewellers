import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

function Slidelrsm() {
  return (
    <div className='h-96 bg-green-400'>
        <Swiper
    // install Swiper modules
    modules={[ Autoplay, Pagination]}
    loop
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    spaceBetween={0}
    slidesPerView={1}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    className=''
  >
    <SwiperSlide className='flex flex-col gap-1 relative'>
        <a href="#" className='relative w-full h-fit'>
            <img className='h-96 relative z-0' src="https://manubhai.in/images/new-home/2022/gold/03-earrings.jpg" />
        </a>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col gap-1 relative'>
        <a href="#" className='relative w-full h-fit'>
            <img className='h-96 relative z-0' src="https://manubhai.in/images/new-home/2022/gold/04-bangles.jpg" />
        </a>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col gap-1 relative'>
        <a href="#" className='relative w-full h-fit'>
            <img className='h-96 relative z-0' src="https://manubhai.in/images/new-home/2022/gold/05-pendant-set.jpg" />
        </a>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col gap-1 relative'>
        <a href="#" className='relative w-full h-fit'>
            <img className='h-96 relative z-0' src="https://manubhai.in/images/new-home/2022/gold/06-gold-sets.jpg" />
        </a>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col gap-1 relative'>
        <a href="#" className='relative w-full h-fit'>
            <img className='h-96 relative z-0' src="https://manubhai.in/images/new-home/2022/gold/01-rings.jpg" />
        </a>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col gap-1 relative'>
        <a href="#" className='relative w-full h-fit'>
            <img className='h-96 relative z-0' src="https://manubhai.in/images/new-home/2022/gold/02-mangalsutra.jpg" />
        </a>
    </SwiperSlide>
    
  </Swiper>
    </div>
  )
}

export default Slidelrsm