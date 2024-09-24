import React from 'react'

const TitleText = ({title, desc}) => {
  const formattedTitle = title.includes('\\n')
  ? title.split('\\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ))
  : title;

  const formattedDesc = desc ? desc.includes('\\n') ? desc.split('\\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  )) : desc : null;

  return (
    <div className='flex flex-col items-center gap-2 w-full'>
        <h2 className='titletext_title uppercase text-black w-full'>{formattedTitle}</h2>
        {
            formattedDesc ? <p className='text_title text-black'>{formattedDesc}</p> : null
        }
    </div>
  )
}

export default TitleText