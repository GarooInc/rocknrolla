"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import { AiOutlineMenu } from "react-icons/ai"
import { MdClose } from "react-icons/md"
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'

const NavBar = () => {
    const { t } = useTranslation()
    const  [showMenu, setShowMenu] = useState(false)

    const router = useRouter()
    const pathname = usePathname()

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

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className="navbar bg-white  md:px-10 p-4">
            <div className=" md:flex hidden">
                <Image src="/assets/images/logo.png" alt="logo" className='cursor-pointer xl:flex hidden' width={100} height={100} onClick={() => router.push('/')} />
            </div>
            <div className="flex-none xl:flex hidden">
                <ul className="menu menu-horizontal px-4 xl:gap-20">
                    {menu.map((item, index) => (
                        item.submenu ? (
                            <li key={index}>
                                <details>
                                    <summary className='nav-item-principal'>
                                        {item.name}
                                    </summary>
                                    <ul className="submenuitem shadow menu rounded-none bg-black text-white hover:bg-none hover:text-white">
                                        {item.submenu.map((subitem, subindex) => (
                                            <React.Fragment key={subindex}>
                                                <li key={subindex} className='nav-item'>
                                                    <a href={subitem.link}>{subitem.name}</a>
                                                </li>
                                                {subindex < item.submenu.length - 1 && <div key={`divider-${subindex}`} className='border-b border-white'></div>}
                                            </React.Fragment>
                                        ))}
                                    </ul>
                                </details>
                            </li>
                        ) : (
                            <li key={index} className={`nav-item-principal ${pathname === item.link ? 'active' : ''}`}>
                                <a href={item.link}>{item.name}</a>
                            </li>
                        )
                    ))}
                </ul>
            </div>
            <div className="flex xl:hidden justify-between w-full">
                <div className="flex justify-between px-4 w-full">
                    <Image src="/assets/images/logo.png" alt="Prodisa" className='cursor-pointer' width={100} height={100} onClick={() => router.push('/')} />
                    <button onClick={toggleMenu}>
                        <AiOutlineMenu size={30} className='text-black' />
                    </button>
                </div>
                {
                    showMenu && (
                        <ul className="menu menu-vertical bg-black text-blue-prod absolute top-0 right-0 z-10 h-screen w-80 p-6">
                            <button onClick={toggleMenu} className='w-full justify-end flex'>
                                <MdClose size={30} className='text-white' />
                            </button>
                            <div className="flex flex-col gap-2 pt-4">
                                {menu.map((item, index) => (
                                    item.submenu ? (
                                        <li key={index}>
                                            <details>
                                                <summary className='nav-item p-0 m-0'>
                                                    {item.name}
                                                </summary>
                                                <ul className="submenuitem shadow menu bg-white text-blue-prod">
                                                    {item.submenu.map((subitem, subindex) => (
                                                        <li key={subindex} className='nav-item'>
                                                            <a className='p-0 m-0 text-black' href={subitem.link}>{subitem.name}</a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </details>
                                        </li>
                                    ) : (
                                        <li key={index} className='nav-item'>
                                            <a className='p-0 m-0' href={item.link}>{item.name}</a>
                                        </li>
                                    )
                                ))}
                            </div>
                        </ul>
                    )
                }
            </div>
            <div className='xl:flex hidden'>
                <LanguageSwitcher />
            </div>
        </div>
    )
}

export default NavBar