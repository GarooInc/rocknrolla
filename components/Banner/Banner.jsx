import React from 'react'
import LineButton from '../LineButton/LineButton'
import { FaPlus } from "react-icons/fa"

const Banner = ({ title, button, secondary, double, image }) => {
  const formattedTitle = title.split('\\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  return (
    <div className={`banner_container relative animation ${secondary ? 'bg-white' : 'bg-black'} ${double ? 'md:px-10 md:py-40 px-4 py-20' : 'md:px-10 md:py-20 px-8 pt-12 pb-8'}`}>
      <h2 className={`home_title relative uppercase ${secondary ? 'text-black' : 'text-white'}`}>
        {formattedTitle}
        {
        image && (
          <img src={image} alt="Banner" className='absolute -bottom-6 -right-6 md:-right-14 md:-bottom-12 w-[40px] h-[40px] md:w-[80px] md:h-[80px] object-cover' />
        )
      }
      </h2>
      {
        secondary ? <LineButton text={button} secondary /> : <LineButton text={button} />
      }
      <FaPlus className={`absolute top-4 right-4 cursor-pointer text-2xl ${secondary ? 'text-black' : ' text-white'}`} />
    </div>
  )
}

export default Banner