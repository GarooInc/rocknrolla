import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import NavBar from '@/components/NavBar/NavBar'
import ImgBanner from '@/components/ImgBanner/ImgBanner'
import LineTitle from '@/components/LineTitle/LineTitle'
import SuccessSquares from '@/components/SuccessSquares/SuccessSquares'
import LineButton from '@/components/LineButton/LineButton'
import Footer from '@/components/Footer/Footer'

const namespaces = ['flash', 'navBar','general']

export default async function Flash({ params: { locale } }) {
    const { t, resources } = await initTranslations(locale, namespaces)
    
    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className='min-h-screen bg-white'>
            <NavBar secondary/>
            <ImgBanner
                backgroundImageDesktop={'/assets/images/flash/flash.png'}
                backgroundImageMobile={'/assets/images/flash/flash.png'}
                text={t('flash:flash_text')}
                logo='/assets/images/flash/logo.webp'
            />
            <div className='container_page  relative justify-center items-center'>
                    <LineTitle text={t('general:sucess_cases')} secondary />
                    <SuccessSquares tag={"FLASH"}/>
                    <div className='flex flex-col w-full gap-10'>
                        <LineTitle text={t('general:leadership')} secondary />
                        <div className='flex justify-center items-center'>
                            <img src='/assets/images/brands/card.png' alt='Line' className='md:w-1/2'/>
                        </div>
                    </div>
                    <div className='absolute md:bottom-0 z-10 bottom-10'>
                        <LineButton text={t('general:back')} secondary />
                    </div>
            </div>
            <Footer />        </div>
        </TranslationsProvider>
    )
}