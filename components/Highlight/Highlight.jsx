import React from 'react';
import { FaPlus } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const Highlight = ({ img, title, tag, id }) => {
  const formattedTitle = title.includes('\\n')
    ? title.split('\\n').map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ))
    : title;

  const router = useRouter();

  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className='highlight_container animation shadow-2xl'
      onClick={() => router.push(`/project/${title.replace(/\s+/g, '-').toLowerCase()}_${id}`)}
    >
      <div className='flex flex-col items-start justify-end p-4 gap-2 w-full'>
        <span className='text-white text-xs font-certia italic tracking-widest'>
          {tag} &gt;
        </span>
        <span className='text-white text-sm xl:text-base font-bold font-certia md:tracking-wide uppercase'>
          {formattedTitle}
        </span>
      </div>
      <FaPlus className='absolute top-2 right-2 cursor-pointer text-lg text-white' />
    </div>
  );
};

export default Highlight;