import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { NavLink } from 'react-router-dom';

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
        <NavLink to="/collections"><img className='h-[86%]' src="https://manubhai.in/images/new-home/2022/diamond/01-bracelet.jpg" /></NavLink>
        <p className='uppercase text-xl font-bold text-zinc-100 w-full text-center mt-2'>Bracelet</p>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col gap-1'>
        <NavLink to="/collections"><img className='h-[86%]' src="https://manubhai.in/images/new-home/2022/diamond/05-pendant-set.jpg" /></NavLink>
        <p className='uppercase text-xl font-bold text-zinc-100 w-full text-center mt-2'>pendant set</p>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col gap-1'>
        <NavLink to="/collections"><img className='h-[86%]' src="https://manubhai.in/images/new-home/2022/diamond/02-ring.jpg" /></NavLink>
        <p className='uppercase text-xl font-bold text-zinc-100 w-full text-center mt-2'>ring</p>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col gap-1'>
        <NavLink to="/collections"><img className='h-[86%]' src="https://manubhai.in/images/new-home/2022/diamond/04-necklace.jpg" /></NavLink>
        <p className='uppercase text-xl font-bold text-zinc-100 w-full text-center mt-2'>Necklace sets</p>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col gap-1'>
        <NavLink to="/collections"><img className='h-[86%]' src="https://manubhai.in/images/new-home/2022/diamond/03-earing.jpg" /></NavLink>
        <p className='uppercase text-xl font-bold text-zinc-100 w-full text-center mt-2'>Earrings</p>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col gap-1'>
        <NavLink to="/collections"><img className='h-[86%]' src="https://manubhai.in/images/new-home/2022/diamond/06-mangalsutra.jpg" /></NavLink>
        <p className='uppercase text-xl font-bold text-zinc-100 w-full text-center mt-2'>Mangalsutra</p>
    </SwiperSlide>
  </Swiper>
  )
}

export default Autoscroll1