import React from 'react'

const Media = () => {
    const media = [
        "/assets/images/media/1.png",
        "/assets/images/media/2.png",
        "/assets/images/media/3.png",
        "/assets/images/media/4.png",
    ]
  return (
    <div className='relative w-full h-full bg-black p-10'>
        <div className='hidden md:grid grid-cols-2 grid-rows-2 gap-4 w-full h-full'>
            {media.map((item, index) => (
                <img key={index} src={item} alt="Media" className='w-10 h-10 object-cover mx-auto my-auto' />
            ))}
            <div className='absolute inset-0 flex justify-center items-center'>
                <div className='w-[80%] h-[1px] bg-white absolute'></div>
                <div className='h-[80%] w-[1px] bg-white absolute'></div>
            </div>
        </div>
        <div className='flex md:hidden justify-between items-center w-full'>
            {media.map((item, index) => (
                <React.Fragment key={index}>
                    <img src={item} alt="Media" className='w-10 h-10 object-cover' />
                    {index < media.length - 1 && <div className='w-[1px] h-10 bg-white'></div>}
                </React.Fragment>
            ))}
        </div>
    </div>
  )
}

export default Media