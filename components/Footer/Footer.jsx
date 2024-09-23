"use client"
import React from 'react';
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation()

    const menu = [
        { name: t('navBar:nav1') , link: '/somos', submenu: [
            { name: t('navBar:nav1_s1') , link: '/somos' },
            { name: t('navBar:nav1_s2') , link: '/somos' },
            { name: t('navBar:nav1_s3') , link: '/somos' },
        ]},
        { name: t('navBar:nav2') , link: '/cultura', submenu: [
            { name: t('navBar:nav2_s1') , link: '/vision' },
            { name: t('navBar:nav2_s2') , link: '/culture' },
            { name: t('navBar:nav2_s3') , link: '/innegotiable' },
        ]},
        { name: t('navBar:nav3') , link: '/work', submenu: [
            { name: t('navBar:nav3_s1') , link: '/work' },
            { name: t('navBar:nav3_s2') , link: '/work' },
        ]},
        { name: t('navBar:nav4') , link: '/partners' },
        { name: t('navBar:nav5') , link: '/contact' },
    ]

  return (
    <footer className="bg-black text-white md:mt-10 font-certia">
      <div className="md:w-full">
        {/* Desktop layout */}
        <div className="hidden lg:flex justify-between w-full">
            <div className="flex flex-col w-1/3 p-8">
                <img src='/assets/images/footer/logo.png' alt="Logo" className='w-28' />
            </div>
            <div className='flex flex-col w-full bg-dark-gray '>
                <div className="flex justify-between w-full p-10">
                    {menu.map((item, index) => (
                    <div key={index}>
                        <h4 className="font-bold mb-4">{item.name}</h4>
                        <ul className="space-y-4">
                        {item.submenu ? (
                            item.submenu.map((subitem, subindex) => (
                            <li className='font-certia font-light' key={subindex}>{subitem.name}</li>
                            ))
                        ) : (
                            <li></li>
                        )}
                        </ul>
                    </div>
                    ))}
                    <div className="flex items-start gap-4 px-4">
                        {/* Social media icons */}
                        <a href="#" className="hover:opacity-75">
                            <img src="/assets/images/media/1.png" alt="Instagram" className='w-8' />
                        </a>
                        <a href="#" className="hover:opacity-75">
                            <img src="/assets/images/media/3.png" alt="LinkedIn" className='w-8' />
                        </a>
                        <a href="#" className="hover:opacity-75">
                            <img src="/assets/images/media/2.png" alt="Vimeo" className='w-8' />
                        </a>
                    </div>
                </div>
                {/* Copyright text */}
                <div className="text-start text-xs p-4">
                    <div className="border-t border-white my-4"></div>
                    © 2024 ROCKNROLLA, RR GROUP. TRADEMARKS AND BRANDS ARE THE PROPERTY OF THEIR RESPECTIVE OWNERS.
                </div>
            </div>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden flex items-start">
            <div className="text-center text-2xl p-4 w-1/3">
                <img src='/assets/images/footer/logo.png' alt="Logo" className='w-24' />
            </div>
            <div className='flex flex-col gap-4 w-2/3 bg-dark-gray p-8'>
                <div className="grid grid-cols-2 gap-10 text-center">
                    {menu.map((item, index) => (
                    <div key={index}>
                        <h4 className="font-bold mb-2 text-start text-lg">{item.name}</h4>
                        <ul className="space-y-1 text-start text-sm">
                        {item.submenu ? (
                            item.submenu.map((subitem, subindex) => (
                            <li className='font-certia font-light' key={subindex}>{subitem.name}</li>
                            ))
                        ) : (
                            <li></li>
                        )}
                        </ul>
                    </div>
                    ))}
                </div>
                {/* Social media icons */}
                <div className="flex space-x-4">
                    <a href="#" className="hover:opacity-75">
                    <img src="/assets/images/media/1.png" alt="Instagram" className='w-8' />
                    </a>
                    <a href="#" className="hover:opacity-75">
                    <img src="/assets/images/media/3.png" alt="LinkedIn" className='w-8' />
                    </a>
                    <a href="#" className="hover:opacity-75">
                    <img src="/assets/images/media/2.png" alt="Vimeo" className='w-8' />
                    </a>
                </div>
                {/* Copyright text */}
                <div className="text-start text-xs">
                    <div className="border-t border-white my-4"></div>
                    © 2024 ROCKNROLLA, RR GROUP. TRADEMARKS AND BRANDS ARE THE PROPERTY OF THEIR RESPECTIVE OWNERS.
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;