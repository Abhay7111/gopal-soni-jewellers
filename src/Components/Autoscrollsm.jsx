import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img1 from '../assets/01.jpg'
import img2 from '../assets/02.jpg'
import img3 from '../assets/03.jpg'
import img4 from '../assets/04.jpg'
import img5 from '../assets/05.jpg'
import img6 from '../assets/06.jpg'
import img7 from '../assets/07.jpg'
import img8 from '../assets/08.jpg'
import { NavLink } from 'react-router-dom';

function Autoscrollsm() {
  return (
    <div className='flex h-[460px] items-center justify-start gap-10'>
      <img src={img1} className='w-full h-fit object-cover'/>
      <img src={img2} className='w-full h-fit object-cover'/>
      <img src={img3} className='w-full h-fit object-cover'/>
      <img src={img4} className='w-full h-fit object-cover'/>
      <img src={img5} className='w-full h-fit object-cover'/>
      <img src={img6} className='w-full h-fit object-cover'/>
      <img src={img7} className='w-full h-fit object-cover'/>
      <img src={img8} className='w-full h-fit object-cover'/>
    </div>
  )
}

export default Autoscrollsm