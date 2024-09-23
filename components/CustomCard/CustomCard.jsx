import React from 'react';

const CustomCard = ({title, text}) => {
  return (
    <div className="relative bg-black text-white p-10 rounded-lg shadow-lg w-full max-w-md md:max-w-xl mx-auto gap-2">
        <div className="absolute inset-4 border-[1px] border-white rounded-lg pointer-events-none"></div>

      <div className="relative z-10 text-center">
        <h2 className="titletext_card text-white">
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
