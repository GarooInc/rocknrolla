import React from 'react';
import useFormattedTitle from '@/hooks/useFormattedTitle';


const CustomCard = ({title, text}) => {
  title = useFormattedTitle(title);
  text = useFormattedTitle(text);
  
  return (
    <div className="relative bg-black text-white p-10 rounded-xl drop-shadow-2xl shadow-xl w-full max-w-md md:max-w-xl mx-auto">
        <div className="absolute inset-1 border-[1px] border-white rounded-xl pointer-events-none"></div>

      <div className="relative z-10 text-center">
        <h2 className="titletext_card text-white uppercase">
            {title}
        </h2>
        <p className="text_title text-white">
            {text}
        </p>
      </div>
    </div>
  );
};

export default CustomCard;
