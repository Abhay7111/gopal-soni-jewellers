import React from 'react'
import Nav from '../Components/Nav'
import { NavLink } from 'react-router-dom'
import Diamonds from '../Components/Diamonds'
import Heritage from '../Components/Heritage'
import Contact from '../Components/Contact'
import Slidelr from '../Components/Slidelr'
import Footer from '../Components/Footer'
import Contact01 from '../Components/Contact01'
import Slidelrsm from '../Components/Slidelrsm'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'

function Hero() {
  return (
    <div>
        <Nav/>    
        <div className=''>
            <NavLink to="/collections">
                <div className='sm:block hidden'>
                    <img src="https://manubhai.in/img/slider/web_banner_2024-09-10_new.jpg" />
                </div>
                <div className='sm:hidden block'>
                    <img src="https://manubhai.in/img/slider/mobile_banner_2024-09-10_new.jpg" />
                </div>
            </NavLink>
        </div>
        <div className='w-full flex flex-col gap-7 my-10'>
            <div className='flex items-center justify-center gap-5'>
                <NavLink to={`/collections`}><img src="https://manubhai.in/img/shop_products/37005E03-DFEF-42EA-9650-87C78A5C3676.jpg" className='w-[48vw] object-cover' /></NavLink>
                <NavLink to={`/collections`}><img src="https://manubhai.in/img/shop_products/E0885CDE-17A9-4C15-839B-2A69A4AA2374.jpg" className='w-[48vw] object-cover' /></NavLink>
            </div>
            <div className='flex items-center justify-center gap-5'>
                <NavLink to={`/collections`}><img src="https://manubhai.in/img/shop_products/6D29A414-8EB5-4512-908B-9FD65557FB1F.jpg" className='w-[48vw] object-cover' /></NavLink>
                <NavLink to={`/collections`}><img src="https://manubhai.in/img/shop_products/D1EFFF69-6BF4-4BCD-8F70-6888681B6223.jpg" className='w-[48vw] object-cover' /></NavLink>
            </div>
        </div>
        <div className='px-5 h-fit py-5 flex flex-col items-center gap-5 overflow-hidden'>
            <Diamonds/>
        </div>
            <div className='sm:h-auto h-[50vh]'>
                <Heritage/>
            </div>
        <div className='w-full py-10 h-fit hidden sm:block'>
            <Slidelr/>
        </div>
        <div className='sm:hidden block mt-60 px-10 relative h-[500px] overflow-hidden'>
        <div className=' '>
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
        <NavLink to="/collections" className='relative w-full h-fit'>
            <img className='h-96 relative z-0' src={img1} />
        </NavLink>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col gap-1 relative'>
        <NavLink to="/collections" className='relative w-full h-fit'>
            <img className='h-96 relative z-0' src={img2} />
        </NavLink>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col gap-1 relative'>
        <NavLink to="/collections" className='relative w-full h-fit'>
            <img className='h-96 relative z-0' src={img3} />
        </NavLink>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col gap-1 relative'>
        <NavLink to="/collections" className='relative w-full h-fit'>
            <img className='h-96 relative z-0' src={img4} />
        </NavLink>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col gap-1 relative'>
        <NavLink to="/collections" className='relative w-full h-fit'>
            <img className='h-96 relative z-0' src={img5} />
        </NavLink>
    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        <div className='flex sm:flex-row flex-col items-center justify-center gap-5 px-5'>
                <NavLink to="/collections" className='sm:w-[48%] h-full'><img src="https://manubhai.in/img/shop_products/27116054-15E1-4441-A18B-54385B7D27F2.jpg" alt="Antique" className='text-base uppercase h-full w-full object-cover' /></NavLink>
            <div className='sm:w-[48%] flex flex-col gap-[2vw]'>
                <NavLink to="/collections"><img src="https://manubhai.in/img/shop_products/63E7BB19-31F1-41C1-94F1-CCF86AAF1B19.jpg" alt="Antique" className='text-base uppercase h-[48%] w-full object-cover' /></NavLink>
                <NavLink to="/collections"><img src="https://manubhai.in/img/shop_products/9A80970B-0F86-4AD8-ADF2-3AA9F0E7FAC7.jpg" alt="Antique" className='text-base uppercase h-[48%] w-full object-cover' /></NavLink>
            </div>
        </div>
        <div>
        </div>
        <Footer/>   
    </div>
  )
}

export default Hero