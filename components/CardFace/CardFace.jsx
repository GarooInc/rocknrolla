"use client";
import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";

const CardFace = ({ face, card }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`flex justify-center items-center relative transition-all duration-300 ease-out transform ${isFlipped ? 'md:w-[600px] md:scale-105 w-full' : 'md:w-[300px] md:scale-95 w-1/2'}`}>
            <img src={isFlipped ? card : face} alt='Line' className="object-cover w-full h-full"/>
            <div className='absolute top-4 right-4'>
                {isFlipped ? (
                    <FaMinus onClick={handleFlip} className='text-white cursor-pointer text-xl' />
                ) : (
                    <FaPlus onClick={handleFlip} className='text-white cursor-pointer text-xl' />
                )}
            </div>
        </div>
    );
}

export default CardFace;