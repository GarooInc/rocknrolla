"use client"
import React from 'react'
import LineButton from '../LineButton/LineButton'
import { FaPlus } from "react-icons/fa"
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';


const Banner = ({ title, button, secondary, double, image, link }) => {
  const router = useRouter();
  const formattedTitle = title.split('\\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  return (
    <div className={`banner_container relative animation cursor-pointer ${secondary ? 'bg-white' : 'bg-black'} ${double ? 'md:px-10 md:py-40 px-4 py-20' : 'md:px-10 md:py-20 px-8 pt-20 pb-12'}`} onClick={() => router.push(link)}>
      <h2 className={`home_title relative uppercase ${secondary ? 'text-black' : 'text-white'}`}>
        {formattedTitle}
        {
        image && (
          <img src={image} alt="Banner" className={`${currentLocale === 'es' ? 'absolute -bottom-6 -right-6 md:-right-14 md:-bottom-12 w-[40px] h-[40px] md:w-[80px] md:h-[80px] object-cover' : 'absolute -bottom-4 right-8 md:right-14 md:-bottom-10 w-[42px] h-[42px] md:w-[80px] md:h-[80px] object-cover'}`} />
        )
      }
      </h2>
      {
        secondary ? <LineButton text={button} secondary nav={link} /> : <LineButton text={button} nav={link}/>
      }
      <button onClick={() => router.push(link)} className='absolute top-4 right-4 cursor-pointer'>
        <FaPlus className={` text-2xl ${secondary ? 'text-black' : ' text-white'}`} />
      </button>
    </div>
  )
}

export default Banner