"use client";
import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";

const CardFace = ({ face, card }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className={`flex justify-center items-center relative transition-all duration-300 ease-out transform ${isFlipped ? 'md:w-[600px] scale-105 w-full' : 'md:w-[300px] scale-95 w-1/2'}`}>
            <img src={isFlipped ? card : face} alt='Line' className="object-cover w-full h-full"/>
            <div className='absolute top-4 right-4'>
                {isFlipped ? (
                    <FaMinus onClick={() => setIsFlipped(false)} className='text-white cursor-pointer text-xl hover:text-white' />
                ) : (
                    <FaPlus onClick={() => setIsFlipped(true)} className='text-white cursor-pointer text-xl hover:text-black' />
                )}
            </div>
        </div>
    );
}

export default CardFace;