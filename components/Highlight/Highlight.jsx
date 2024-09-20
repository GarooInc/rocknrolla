import React from 'react';
import { FaPlus } from "react-icons/fa";

const Highlight = ({ img, title }) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className='highlight bg-cover bg-center bg-no-repeat md:flex-grow md:h-full h-60 flex items-end justify-end relative md:w-full w-1/2'
    >
      <div className='flex flex-col items-start justify-end p-8 rounded-lg'>
        <span className='text-white text-sm font-bold font-certia italic tracking-widest'>
          FUTURE &gt;
        </span>
        <h2 className='text-white text-lg font-bold'>{title}</h2>
      </div>
      <FaPlus className='absolute top-2 right-2 cursor-pointer text-lg text-white' />
    </div>
  );
};

export default Highlight;
