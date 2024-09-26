import React from 'react'
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import { NavLink } from 'react-router-dom';
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.jpg"
import img6 from "../assets/6.jpg"
import img01 from "../assets/01.jpg"
import img02 from "../assets/02.jpg"
import img03 from "../assets/03.jpg"
import img04 from "../assets/04.jpg"
import img05 from "../assets/05.jpg"
import img06 from "../assets/06.jpg"
import img07 from "../assets/07.jpg"
import img08 from "../assets/08.jpg"

const images = [
  img1, img2, img3, img4, img5, img6, img01, img02, img03, img04, img05, img06, img07, img08
];

function Collection() {
  return (
    <>
    <Nav/>
    <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold px-3 sm:px-5 uppercase'>
      collections - <NavLink to={'/'} className={`text-2xl sm:text-3xl md:text-4xl font-medium`}>Home</NavLink>
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6">
      {Array.from({ length: 14 }, (_, index) => (
        <div key={index} className="border border-gray-300 rounded-lg p-3 text-center">
          <img 
            src={images[index % images.length]} 
            alt={`Product ${index + 1}`} 
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      ))}
    </div>
    <Footer/>
    </>
  )
}

export default Collection