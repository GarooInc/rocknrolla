import React from 'react';

const LineTitle = ({ text, secondary}) => {
  return (
    <div className="line-buttoncontainer">
      <span className={`border-l ${secondary ? 'border-black text-black' : 'border-white text-white'} h-6`}></span>
      <span className={`line-buttontext ${secondary ? 'text-black' : 'text-white'}`}>{text}</span>
      <span className={`border-l ${secondary ? 'border-black text-black' : 'border-white text-white'} h-6`}></span>
    </div>
  );
};

export default LineTitle;
