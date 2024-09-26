"use client"
import React from 'react'
import { FaPlus } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const Group = ({ cover, logo, secondary,link }) => {
  const router = useRouter();
  return (
    <div
      style={{ backgroundImage: `url(${cover})` }}
      className='group_container animation shadow-2xl'
      onClick={() => router.push(link)}
    >
      <div className='flex flex-col items-center justify-end h-full py-8'>
        <img src={logo} alt="Logo" className='h-20' />
      </div>
      <FaPlus className={`absolute top-2 right-2 cursor-pointer text-lg ${secondary ? 'text-black' : ' text-white'}`} />
    </div>
  );
}

export default Group;
