import React from 'react';

const LineButton = ({ text, secondary}) => {
  return (
    <button className="line-buttoncontainer">
      <span className={`border-l ${secondary ? 'border-black text-black' : 'border-white text-white'} h-6`}></span>
      <span className={`line-buttontext ${secondary ? 'text-black' : 'text-white'}`}>{text}</span>
      <span className={`border-l ${secondary ? 'border-black text-black' : 'border-white text-white'} h-6`}></span>
    </button>
  );
};

export default LineButton;
