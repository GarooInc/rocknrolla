import React from 'react'
import { FaPlus } from "react-icons/fa";

const Group = ({cover, logo, secondary}) => {
  return (
    <div style={{backgroundImage: `url(${cover})`}} className='group bg-cover bg-center bg-no-repeat md:h-1/4 h-48 flex items-center justify-center relative md:w-full w-1/2 '>
        <div className='flex flex-col items-center justify-end h-full p-4'>
            <img src={logo} alt="Logo" className='h-24' />
        </div>
        <FaPlus className={`absolute top-2 right-2 cursor-pointer text-lg ${secondary ? 'text-black' : ' text-white'}`} />
    </div>
  )
}

export default Group