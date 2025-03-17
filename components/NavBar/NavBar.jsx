"use client"
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const NavBar = ({secondary}) => {
    const { t } = useTranslation();
    const [activeSubmenu, setActiveSubmenu] = useState(null); // Controlar el submenú activo
    const [showMobileMenu, setShowMobileMenu] = useState(false); // Controlar el menú móvil
    const menuRef = useRef(null);

    const router = useRouter();

    const menu = [
        {
            name: t('navBar:nav1'), submenu: [
                { name: t('navBar:nav1_s1'), link: '/brands' },
                { name: t('navBar:nav1_s2'), link: '/buzz' },
                { name: t('navBar:nav1_s3'), link: '/future' },
                { name: t('navBar:nav1_s4'), link: '/flash'}
            ]
        },
        {
            name: t('navBar:nav2'), submenu: [
                { name: t('navBar:nav2_s1'), link: '/vision' },
                { name: t('navBar:nav2_s2'), link: '/culture' },
                { name: t('navBar:nav2_s3'), link: '/non-negotiable' },
            ]
        },
        {
            name: t('navBar:nav3'), submenu: [
                { name: t('navBar:nav3_s1'), link: '/project/toledoyunainvitacionimpostergable_9lg0qrheaz2r7xd' },
                { name: t('navBar:nav3_s2'), link: '/highlights' },
            ]
        },
        { name: t('navBar:nav4'), link: '/partners' },
        { name: t('navBar:nav5'), link: 'mailto:hola@rocknrolla23.com' },
    ];

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    const toggleSubmenu = (index) => {
        setActiveSubmenu(activeSubmenu === index ? null : index); // Cierra el submenu si es el mismo, lo abre si es otro
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setShowMobileMenu(false);
            setActiveSubmenu(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={`navbar bg-white md:px-10 p-4  ${secondary ? 'border-b border-black' : 'shadow-md'}`} ref={menuRef}>
            {/* Logo Desktop */}
            <div className="md:flex hidden">
                <Image src="/assets/images/logo.png" alt="logo" className='cursor-pointer xl:flex hidden' width={100} height={100} onClick={() => router.push('/')} />
            </div>

            {/* Menú Desktop */}
            <div className="flex-none xl:flex hidden">
                <ul className="menu menu-horizontal px-4 xl:gap-20">
                    {menu.map((item, index) => (
                        <li key={index} className="relative">
                            <a
                                className="nav-item-principal cursor-pointer"
                                {
                                    ...item.submenu && {
                                        onClick: () => toggleSubmenu(index)
                                    }
                                }
                                {
                                    ...!item.submenu && {
                                        href: item.link
                                    }
                                }
                            >
                                {item.name}
                            </a>
                            {item.submenu && activeSubmenu === index && (
                                <ul className="absolute submenuitem shadow menu rounded-none bg-black text-white hover:bg-none hover:text-white top-10 left-0 z-20">
                                    {item.submenu.map((subitem, subindex) => (
                                            <div key={`divider-${subindex}`} className='flex flex-col'>
                                                <li key={subindex} className='nav-item my-2'>
                                                    <a className='menu_item_desktop' href={subitem.link}>{subitem.name}</a>
                                                </li>
                                                {subindex < item.submenu.length - 1 && <div key={`divider-${subindex}`} className='border-b border-white'></div>}
                                            </div>
                                        ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Menú Mobile */}
            <div className="flex xl:hidden justify-between w-full">
                <div className="flex justify-between px-4 w-full">
                    <button onClick={toggleMobileMenu} className="w-10">
                        <IoMenu className="text-black w-8 h-8" />
                    </button>
                    <Image
                    src="/assets/images/logo.png"
                    alt="Logo"
                    className="cursor-pointer w-30 py-2"
                    width={100}
                    height={100}
                    onClick={() => router.push('/')}
                    />
                    <div className="flex xl:hidden w-20 justify-end">
                        <LanguageSwitcher />
                    </div>
                </div>

                <ul
                    className={`menu menu-vertical menu_items_animated ${
                    showMobileMenu ? '-translate-x-0' : 'translate-x-full'
                    }`}
                >
                <button onClick={toggleMobileMenu} className="w-full justify-end flex">
                <MdClose size={30} className="text-white" />
                </button>
                <div className="flex flex-col gap-4 pt-4">
                    {menu.map((item, index) => (
                        <React.Fragment key={index}>
                        <li>
                            <a
                            className="nav-item cursor-pointer"
                            {...(item.submenu
                                ? { onClick: () => toggleSubmenu(index) }
                                : { href: item.link })}
                            >
                            {item.name}
                            </a>
                            {item.submenu && activeSubmenu === index && (
                            <ul className="submenuitem bg-white text-black mt-2 shadow-lg p-4">
                                {item.submenu.map((subitem, subindex) => (
                                <li key={subindex} className="my-2 hover:bg-gray-200 p-2">
                                    <a href={subitem.link} className="menu_item_mobile">
                                    {subitem.name}
                                    </a>
                                </li>
                                ))}
                            </ul>
                            )}
                        </li>
                        {index < menu.length - 1 && (
                            <div className="border-b border-white my-2"></div>
                        )}
                        </React.Fragment>
                    ))}
                </div>
                <div className="flex space-x-4 justify-center items-center p-10">
                    <a href="https://www.instagram.com/rocknrolla.23/" className="hover:opacity-75">
                        <img src="/assets/images/media/1.png" alt="Instagram" className="w-10" />
                    </a>
                    <a href="https://www.linkedin.com/company/rocknrolla23/" className="hover:opacity-75">
                        <img src="/assets/images/media/3.png" alt="LinkedIn" className="w-10" />
                    </a>
                    <a href="https://vimeo.com/user163897483" className="hover:opacity-75">
                        <img src="/assets/images/media/2.png" alt="Vimeo" className="w-10" />
                    </a>
                </div>
            </ul>
            </div>

            <div className="xl:flex hidden justify-end">
                <LanguageSwitcher />
            </div>
        </div>
    );
};

export default NavBar;