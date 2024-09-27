import React from 'react';
import Image from 'next/image';
import useFormattedTitle from '@/hooks/useFormattedTitle';

const ImgBanner = ({ backgroundImageMobile, backgroundImageDesktop, text, logo }) => {
    text = useFormattedTitle(text); // Formatear el texto

    return (
        <div className="relative w-full md:h-[600px] h-[350px] bg-cover bg-center flex items-center justify-center">
            {/* Fondo para dispositivos móviles */}
            <div
                className="absolute inset-0 bg-cover bg-center md:hidden"
                style={{
                    backgroundImage: `url(${backgroundImageMobile})`,
                }}
            ></div>

            {/* Fondo para dispositivos de escritorio */}
            <div
                className="absolute inset-0 bg-cover bg-center hidden md:block"
                style={{
                    backgroundImage: `url(${backgroundImageDesktop})`,
                }}
            ></div>

            {/* Texto */}
            <div className=" mb-6 md:mb-10 text-start absolute md:top-24 top-24">
                <span className='font-garamond text-white font-bold text-lg md:text-2xl xl:text-4xl leading-6 tracking-wide'>{text}</span>
            </div>

            {/* Logo */}
            <div className="absolute bottom-10 right-10 flex justify-center">
                <Image
                    src={logo}
                    alt="Logo"
                    width={150}
                    height={150}
                    className="object-contain md:w-40 w-28"
                />
            </div>
        </div>
    );
};

export default ImgBanner;