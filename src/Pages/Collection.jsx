import React from 'react'
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import { NavLink } from 'react-router-dom';

const images = [
  "https://manubhai.in/img/shop_products/37005E03-DFEF-42EA-9650-87C78A5C3676.jpg",
  "https://manubhai.in/img/shop_products/E0885CDE-17A9-4C15-839B-2A69A4AA2374.jpg",
  "https://manubhai.in/img/shop_products/6D29A414-8EB5-4512-908B-9FD65557FB1F.jpg",
  "https://manubhai.in/img/shop_products/D1EFFF69-6BF4-4BCD-8F70-6888681B6223.jpg",
  "https://cdn.caratlane.com/media/catalog/product/J/N/JN00179-YGP900_1_lar.jpg",
  "https://cdn.caratlane.com/media/catalog/product/J/N/JN00050-YGP900_1_lar.jpg",
  "https://cdn.caratlane.com/media/catalog/product/J/N/JN00005-YGP600_1_lar.jpg",
  "https://cdn.caratlane.com/media/catalog/product/J/N/JN00006-YGP900_1_lar.jpg",
  "https://cdn.caratlane.com/media/catalog/product/J/N/JN00052-YGP900_1_lar.jpg",
  "https://cdn.caratlane.com/media/catalog/product/J/N/JN00133-YGP600_1_lar.jpg",
  "https://cdn.caratlane.com/media/catalog/product/J/N/JN00270-1YP900_1_lar.jpg",
  "https://cdn.caratlane.com/media/catalog/product/J/N/JN00086-YGP900_1_lar.jpg",
  "https://manubhai.in/img/shop_products/27116054-15E1-4441-A18B-54385B7D27F2.jpg",
  "https://manubhai.in/img/shop_products/63E7BB19-31F1-41C1-94F1-CCF86AAF1B19.jpg",
  "https://manubhai.in/img/shop_products/9A80970B-0F86-4AD8-ADF2-3AA9F0E7FAC7.jpg"
];

function Collection() {
  return (
    <>
    <Nav/>
    <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold px-3 sm:px-5 uppercase'>
      collections - <NavLink to={'/'} className={`text-2xl sm:text-3xl md:text-4xl font-medium`}>Home</NavLink>
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6">
      {Array.from({ length: 20 }, (_, index) => (
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