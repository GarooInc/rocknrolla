"use client"
import React from 'react';
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation()

    const menu = [
        { name: t('navBar:nav1') , link: '/somos', submenu: [
            { name: t('navBar:nav1_s1') , link: '/brands' },
            { name: t('navBar:nav1_s2') , link: '/buzz' },
            { name: t('navBar:nav1_s3') , link: '/future' },
        ]},
        { name: t('navBar:nav2') , link: '/cultura', submenu: [
            { name: t('navBar:nav2_s1') , link: '/vision' },
            { name: t('navBar:nav2_s2') , link: '/culture' },
            { name: t('navBar:nav2_s3') , link: '/non-negotiable' },
            { name: t('navBar:nav6') , link: '/jobapplication' },

        ]},
        { name: t('navBar:nav3') , link: '/work', submenu: [
            { name: t('navBar:nav3_s1') , link: '/project/toledoyunainvitacionimpostergable_9lg0qrheaz2r7xd' },
            { name: t('navBar:nav3_s2') , link: '/highlights' },
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
                <img src='/assets/images/footer/logo.png' alt="Logo" className='w-36' />
            </div>
            <div className='flex flex-col w-full bg-dark-gray '>
                <div className="flex justify-between w-full p-10">
                    {menu.map((item, index) => (
                    <div key={index}>
                        <span className="font-bold mb-4 text-sm">{item.name}</span>
                        <ul className="space-y-4">
                        {item.submenu ? (
                            item.submenu.map((subitem, subindex) => (
                            <li className="font-certia font-light text-sm" key={subindex}>
                                <a href={subitem.link} className="block w-full h-full">
                                {subitem.name}
                                </a>
                            </li>
                            ))
                        ) : (
                            <li></li>
                        )}
                        </ul>

                    </div>
                    ))}
                    <div className="flex items-start gap-4 px-4">
                        {/* Social media icons */}
                        <a href="https://www.instagram.com/rocknrolla.23/" className="hover:opacity-75">
                            <img src="/assets/images/media/1.png" alt="Instagram" className='w-6' />
                        </a>
                        <a href="https://www.linkedin.com/company/rocknrolla23/" className="hover:opacity-75">
                            <img src="/assets/images/media/3.png" alt="LinkedIn" className='w-6' />
                        </a>
                        <a href="https://vimeo.com/user163897483" className="hover:opacity-75">
                            <img src="/assets/images/media/2.png" alt="Vimeo" className='w-6' />
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
                    <div className='flex relative'>
                        <div className="grid grid-cols-2 gap-4 text-center">
                            {menu.map((item, index) => (
                            <div key={index}>
                                <p className="font-bold mb-2 text-start text-xs">{item.name}</p>
                                <ul className="space-y-1 text-start text-xs">
                                {item.submenu ? (
                                    item.submenu.map((subitem, subindex) => (
                                    <li className="font-certia font-light text-xs" key={subindex}>
                                        <a className="w-full h-full block" href={subitem.link}>
                                        {subitem.name}
                                        </a>
                                    </li>
                                    ))
                                ) : (
                                    <li></li>
                                )}
                                </ul>
                            </div>
                            ))}
                        </div>
                        {/* Social media icons */}
                        <div className="flex space-x-4 justify-end items-end absolute bottom-2 right-8">
                            <a href="#" className="hover:opacity-75">
                            <img src="/assets/images/media/1.png" alt="Instagram" className='w-4' />
                            </a>
                            <a href="#" className="hover:opacity-75">
                            <img src="/assets/images/media/3.png" alt="LinkedIn" className='w-4' />
                            </a>
                            <a href="#" className="hover:opacity-75">
                            <img src="/assets/images/media/2.png" alt="Vimeo" className='w-4' />
                            </a>
                        </div>
                    </div>
                {/* Copyright text */}
                <div className="text-start text-[8px]">
                    <div className="border-t border-white my-4 text-xs"></div>
                    © 2024 ROCKNROLLA, RR GROUP. TRADEMARKS AND BRANDS ARE THE PROPERTY OF THEIR RESPECTIVE OWNERS.
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;