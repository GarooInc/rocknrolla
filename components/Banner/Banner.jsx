import React from 'react'
import LineButton from '../LineButton/LineButton'
import { FaPlus } from "react-icons/fa"

const Banner = ({title,button,secondary}) => {
  return (
    <div className={`px-10 py-20 flex flex-col justify-center items-center gap-4 shadow-xl relative ${secondary ? 'bg-white' : 'bg-black'}`}>
        <h2 className={`home_title uppercase ${secondary ? 'text-black' : 'text-white'}`}>{title}</h2>
        {
            secondary ? <LineButton text={button} secondary /> : <LineButton text={button} />
        }
        <FaPlus className={`absolute top-4 right-4 cursor-pointer text-2xl ${secondary ? 'text-black' : ' text-white'}`} />
    </div>
  )
}

export default Banner