import React from 'react';
import { FaPlus } from "react-icons/fa";

const Highlight = ({ img, title }) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className='highlight_container animation'
    >
      <div className='flex flex-col items-start justify-end p-4 gap-2'>
        <span className='text-white text-xs font-certia italic tracking-widest'>
          FUTURE &gt;
        </span>
        <span className='text-white text-sm font-bold font-certia'>
          {title}
        </span>
      </div>
      <FaPlus className='absolute top-2 right-2 cursor-pointer text-lg text-white' />
    </div>
  );
};

export default Highlight;
