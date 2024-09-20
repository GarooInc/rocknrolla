import React from 'react'

const Highlight = ({img, title}) => {
  return (
    <div style={{backgroundImage: `url(${img})`}} className='highlight bg-cover bg-center bg-no-repeat h-96 flex items-center justify-center'>
        <div className='flex flex-col items-center justify-end'>
            <span className='text-white text-4xl font-bold'>FUTURE &gt;</span>
            <h2 className='text-white text-6xl font-bold'>{title}</h2>
        </div>
    </div>
  )
}

export default Highlight