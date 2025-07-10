"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const LineButton = ({ text, secondary, nav, onClick}) => {
  const router = useRouter();
  return (
    <button className="line-buttoncontainer" onClick={() => {
      if (nav) {
        router.push(nav);
      }
      if (onClick) {
        onClick();
      } 
      if (!nav && !onClick) {
        router.back();
      }
    }}>
      <span className={`border-l ${secondary ? 'border-black text-black' : 'border-white text-white'} h-6`}></span>
      <span className={`line-buttontext ${secondary ? 'text-black' : 'text-white'}`}>{text}</span>
      <span className={`border-l ${secondary ? 'border-black text-black' : 'border-white text-white'} h-6`}></span>
    </button>
  );
};

export default LineButton;
