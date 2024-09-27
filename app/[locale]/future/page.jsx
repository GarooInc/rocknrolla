import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import NavBar from '@/components/NavBar/NavBar'
import ImgBanner from '@/components/ImgBanner/ImgBanner'
import LineTitle from '@/components/LineTitle/LineTitle'
import SuccessSquares from '@/components/SuccessSquares/SuccessSquares'
import LineButton from '@/components/LineButton/LineButton'
import Footer from '@/components/Footer/Footer'

const namespaces = ['future', 'navBar', 'general']

export default async function Future({ params: { locale } }) {
    const { t, resources } = await initTranslations(locale, namespaces)
    
    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className='min-h-screen bg-white'>
            <NavBar secondary/>
            <ImgBanner
                backgroundImageDesktop={'/assets/images/future/desktop.webp'}
                backgroundImageMobile={'/assets/images/future/mobile.webp'}
                text={t('future:future_text')}
                logo='/assets/images/future/logo.webp'
            />
            <div className='container_page relative justify-center items-center'>
                    <LineTitle text={t('general:sucess_cases')} secondary />
                    <SuccessSquares tag={"FUTURE"}/>
                    <div className='flex flex-col w-full gap-10'>
                        <LineTitle text={t('general:leadership')} secondary />
                        <div className='flex justify-center items-center'>
                            <img src='/assets/images/future/card.png' alt='Line' className='md:w-1/2'/>
                        </div>
                    </div>
                    <div className='absolute md:bottom-0 z-10 bottom-10'>
                        <LineButton text={t('general:back')} secondary />
                    </div>
            </div>
            <Footer />
        </div>
        </TranslationsProvider>
    )
}