"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const LineButton = ({ text, secondary, nav}) => {
  const router = useRouter();
  return (
    <button className="line-buttoncontainer" onClick={() => nav ? router.push(nav) : router.back()}>
      <span className={`border-l ${secondary ? 'border-black text-black' : 'border-white text-white'} h-6`}></span>
      <span className={`line-buttontext ${secondary ? 'text-black' : 'text-white'}`}>{text}</span>
      <span className={`border-l ${secondary ? 'border-black text-black' : 'border-white text-white'} h-6`}></span>
    </button>
  );
};

export default LineButton;
