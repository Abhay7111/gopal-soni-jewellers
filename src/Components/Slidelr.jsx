import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import { NavLink } from 'react-router-dom'

function Slidelr() {
  return (
    <div>
        <Swiper
    // install Swiper modules
    modules={[ Autoplay, Pagination]}
    loop
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    spaceBetween={10}
    slidesPerView={4}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    className='sm:w-[80vw] h-[45vh] w-full'
  >
    <SwiperSlide className='flex flex-col gap-1 relative'>
        <NavLink to="/collections" className='relative w-full h-full'>
            <img className='h-full relative z-0' src="https://manubhai.in/images/new-home/2022/gold/03-earrings.jpg" />
        </NavLink>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col gap-1 relative'>
        <NavLink to="/collections" className='relative w-full h-full'>
            <img className='h-full relative z-0' src="https://manubhai.in/images/new-home/2022/gold/04-bangles.jpg" />
        </NavLink>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col gap-1 relative'>
        <NavLink to="/collections" className='relative w-full h-full'>
            <img className='h-full relative z-0' src="https://manubhai.in/images/new-home/2022/gold/05-pendant-set.jpg" />
        </NavLink>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col gap-1 relative'>
        <NavLink to="/collections" className='relative w-full h-full'>
            <img className='h-full relative z-0' src="https://manubhai.in/images/new-home/2022/gold/06-gold-sets.jpg" />
        </NavLink>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col gap-1 relative'>
        <NavLink to="/collections" className='relative w-full h-full'>
            <img className='h-full relative z-0' src="https://manubhai.in/images/new-home/2022/gold/01-rings.jpg" />
        </NavLink>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col gap-1 relative'>
        <NavLink to="/collections" className='relative w-full h-full'>
            <img className='h-full relative z-0' src="https://manubhai.in/images/new-home/2022/gold/02-mangalsutra.jpg" />
        </NavLink>
    </SwiperSlide>
    
  </Swiper>
    </div>
  )
}

export default Slidelr