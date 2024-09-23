import React from 'react'

const TitleText = ({title, desc}) => {
  return (
    <div className='flex flex-col items-center gap-4 w-full'>
        <h2 className='titletext_title uppercase text-black w-full'>{title}</h2>
        {
            desc ? <p className='text_title text-black'>{desc}</p> : null
        }
    </div>
  )
}

export default TitleText