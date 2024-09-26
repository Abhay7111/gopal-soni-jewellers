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
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      speed={1000}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="sm:hidden block"
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {[img2, img1, img3, img4, img5, img6, img7, img8].map((img, index) => (
        <SwiperSlide key={index}>
          <NavLink to="/collections">
            <img 
              src={img} 
              alt={`Slide ${index + 1}`} 
              className="ml-[10vw] mr-[5vw] w-96 h-60 object-cover" 
              loading="lazy"
            />
          </NavLink>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Autoscrollsm