import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { NavLink } from 'react-router-dom';
import img1 from '../assets/01.jpg'
import img2 from '../assets/02.jpg'
import img3 from '../assets/03.jpg'
import img4 from '../assets/04.jpg'
import img5 from '../assets/05.jpg'
import img6 from '../assets/06.jpg'
import img7 from '../assets/07.jpg'
import img8 from '../assets/08.jpg'

function Autoscroll1() {
  return (
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
    className='sm:w-[45vw] h-[30vh] w-full'
  >
    <SwiperSlide className='flex flex-col gap-1'>
        <NavLink to="/collections"><img className='h-[86%]' src={img1} /></NavLink>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col gap-1'>
        <NavLink to="/collections"><img className='h-[86%]' src={img2} /></NavLink>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col gap-1'>
        <NavLink to="/collections"><img className='h-[86%]' src={img3} /></NavLink>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col gap-1'>
        <NavLink to="/collections"><img className='h-[86%]' src={img4} /></NavLink>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col gap-1'>
        <NavLink to="/collections"><img className='h-[86%]' src={img5} /></NavLink>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col gap-1'>
        <NavLink to="/collections"><img className='h-[86%]' src={img6} /></NavLink>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col gap-1'>
        <NavLink to="/collections"><img className='h-[86%]' src={img7} /></NavLink>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col gap-1'>
        <NavLink to="/collections"><img className='h-[86%]' src={img8} /></NavLink>
    </SwiperSlide>
  </Swiper>
  )
}

export default Autoscroll1