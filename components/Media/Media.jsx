import React from 'react'

const Media = () => {
    const media = [
        { img: "/assets/images/media/1.png", link: "https://instagram.com" },
        { img: "/assets/images/media/2.png", link: "https://vimeo.com" },
        { img: "/assets/images/media/3.png", link: "https://linkedin.com" },
        { img: "/assets/images/media/4.png", link: "https://google.com" },
    ];

  return (
    <div className='relative w-full h-full bg-black p-10'>
        <div className='hidden md:grid grid-cols-2 grid-rows-2 gap-4 w-full h-full'>
            {media.map((item, index) => (
                <a href={item.link} key={index} target='_blank' rel='noreferrer' className='flex justify-center items-center'>
                    <img key={index} src={item.img} alt="Media" className=' w-10 h-10  object-cover mx-auto my-auto cursor-pointe z-10' />
                </a>
            ))}
            <div className='absolute inset-0 flex justify-center items-center'>
                <div className='w-[80%] h-[1px] bg-white absolute'></div>
                <div className='h-[80%] w-[1px] bg-white absolute'></div>
            </div>
        </div>
        <div className='flex md:hidden justify-between items-center w-full'>
            {media.map((item, index) => (
                <React.Fragment key={index}>
                    <a href={item.link} target='_blank' rel='noreferrer' className='flex justify-center items-center'>
                        <img key={index} src={item.img} alt="Media" className=' w-10 h-10  object-cover mx-auto my-auto cursor-pointe z-10' />
                    </a>
                    {index < media.length - 1 && <div className='w-[1px] h-10 bg-white'></div>}
                </React.Fragment>
            ))}
        </div>
    </div>
  )
}

export default Media