import React from 'react';

const LineTitle = ({ text, secondary, form}) => {
  return (
    <div className={`line-buttoncontainer ${form ? 'py-4' : ''}`}>
      <span className={`border-l ${secondary ? 'border-black text-black' : 'border-white text-white'} h-6`}></span>
      <span className={`line-buttontext ${secondary ? 'text-black' : 'text-white'}`}>{text}</span>
      <span className={`border-l ${secondary ? 'border-black text-black' : 'border-white text-white'} h-6`}></span>
    </div>
  );
};

export default LineTitle;
