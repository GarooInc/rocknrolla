import React from 'react'
import LineButton from '../LineButton/LineButton'
import { FaPlus } from "react-icons/fa"

const Banner = ({ title, button, secondary, double }) => {
  const formattedTitle = title.split('\\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  return (
    <div className={`banner_container animation ${secondary ? 'bg-white' : 'bg-black'} ${double ? 'md:px-10 md:py-40 px-8 py-20' : 'md:px-10 md:py-20 px-8 pt-12 pb-8'}`}>
      <h2 className={`home_title uppercase ${secondary ? 'text-black' : 'text-white'}`}>
        {formattedTitle}
      </h2>
      {
        secondary ? <LineButton text={button} secondary /> : <LineButton text={button} />
      }
      <FaPlus className={`absolute top-4 right-4 cursor-pointer text-2xl ${secondary ? 'text-black' : ' text-white'}`} />
    </div>
  )
}

export default Banner