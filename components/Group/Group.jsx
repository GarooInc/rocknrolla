import React from 'react'
import { FaPlus } from "react-icons/fa";

const Group = ({ cover, logo, secondary }) => {
  return (
    <div
      style={{ backgroundImage: `url(${cover})` }}
      className='group bg-cover bg-center bg-no-repeat md:h-1/4 h-48 flex items-center justify-center relative md:w-full w-1/2 md:transition-transform md:duration-500 md:ease-in-out md:transform hover:scale-105 cursor-pointer md:hover:z-10'
    >
      <div className='flex flex-col items-center justify-end h-full p-4'>
        <img src={logo} alt="Logo" className='h-24' />
      </div>
      <FaPlus className={`absolute top-2 right-2 cursor-pointer text-lg ${secondary ? 'text-black' : ' text-white'}`} />
    </div>
  );
}

export default Group;
