import React from 'react';
import Image from 'next/image';
import useFormattedTitle from '@/hooks/useFormattedTitle';

const ImgBanner = ({ backgroundImageMobile, backgroundImageDesktop, text, logo }) => {
    const formattedText = useFormattedTitle(text);
    const displayText = formattedText || text;


    return (
        <div className="img_banner_container">
            {/* Fondo para dispositivos móviles */}
            <div
                className="img_banner_mobile"
                style={{
                    backgroundImage: `url(${backgroundImageMobile})`,
                }}
            ></div>

            {/* Fondo para dispositivos de escritorio */}
            <div
                className="img_banner_desktop"
                style={{
                    backgroundImage: `url(${backgroundImageDesktop})`,
                }}
            ></div>

            {/* Texto */}
            {
                text && (
                    <div className="img_banner_text_container">
                        <span className='font-garamond text-white font-bold text-lg md:text-3xl xl:text-4xl leading-6 tracking-wide'>{displayText}</span>
                    </div>
                )
            }

            {/* Logo */}
            {
                logo && (
                    <div className="img_banner_logo">
                        <Image
                            src={logo}
                            alt="Logo"
                            width={150}
                            height={150}
                            className="object-contain md:w-40 w-28"
                        />
                    </div>
                )
            }
        </div>
    );
};

export default ImgBanner;