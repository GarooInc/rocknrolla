import React from 'react';

const LineButton = ({ text, secondary}) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <span className={`border-l ${secondary ? 'border-black text-black' : 'border-white text-white'} h-6`}></span>
      <span className={`text-lg ${secondary ? 'text-black' : 'text-white'}`}>{text}</span>
      <span className={`border-l ${secondary ? 'border-black text-black' : 'border-white text-white'} h-6`}></span>
    </div>
  );
};

export default LineButton;
