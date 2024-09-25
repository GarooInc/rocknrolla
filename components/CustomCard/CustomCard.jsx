import React from 'react';
import useFormattedTitle from '@/hooks/useFormattedTitle';


const CustomCard = ({title, text}) => {
  title = useFormattedTitle(title);
  text = useFormattedTitle(text);
  
  return (
    <div className="custom_card_container">
        <div className="custom_card_line"></div>

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
