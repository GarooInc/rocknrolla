import React from 'react'

const Media = () => {
    const mediaFinal = [
        { img: "/assets/images/media/4.png", link: "mailto:hola@rocknrolla23.com" },
        { img: "/assets/images/media/1.png", link: "https://www.instagram.com/rocknrolla.23/" },
        { img: "/assets/images/media/3.png", link: "https://www.linkedin.com/company/rocknrolla23/ " },
        { img: "/assets/images/media/2.png", link: "https://vimeo.com/user163897483" },
    ];

  return (
    <div className='relative w-full h-full bg-black md:p-10 px-8 py-16 cursor-pointer hover:z-10'>
        <div className='hidden md:grid grid-cols-2 grid-rows-2 gap-4 w-full h-full'>
            {mediaFinal.map((item, index) => (
                <a href={item.link} key={index} target='_blank' rel='noreferrer' className='flex justify-center items-center '>
                    <img key={index} src={item.img} alt="Media" className=' w-10 h-10  object-cover mx-auto my-auto cursor-pointe z-10 transition-transform duration-500 ease-in-out transform hover:scale-125' />
                </a>
            ))}
            <div className='absolute inset-0 flex justify-center items-center'>
                <div className='w-[80%] h-[1px] bg-white absolute'></div>
                <div className='h-[80%] w-[1px] bg-white absolute'></div>
            </div>
        </div>
        <div className='flex md:hidden justify-between items-center w-full'>
            {mediaFinal.map((item, index) => (
                <React.Fragment key={index}>
                    <a href={item.link} target='_blank' rel='noreferrer' className='flex justify-center items-center transition-transform duration-500 ease-in-out transform hover:scale-105'>
                        <img key={index} src={item.img} alt="Media" className=' w-10 h-10  object-cover mx-auto my-auto cursor-pointe z-10' />
                    </a>
                    {index < mediaFinal.length - 1 && <div className='w-[1px] h-10 bg-white'></div>}
                </React.Fragment>
            ))}
        </div>
    </div>
  )
}

export default Media