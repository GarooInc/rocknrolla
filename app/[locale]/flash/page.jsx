import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import NavBar from '@/components/NavBar/NavBar'
import ImgBanner from '@/components/ImgBanner/ImgBanner'
import LineTitle from '@/components/LineTitle/LineTitle'
import SuccessSquares from '@/components/SuccessSquares/SuccessSquares'
import LineButton from '@/components/LineButton/LineButton'
import Footer from '@/components/Footer/Footer'
import CardFace from '@/components/CardFace/CardFace'

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
                    <div className='flex flex-col gap-10 md:gap-12'>
                        <LineTitle text={t('general:sucess_cases')} secondary />
                        <SuccessSquares tag={"FLASH"}/>
                    </div>
                    <div className='flex flex-col items-center justify-center w-full gap-10'>
                        <LineTitle text={t('general:leadership')} secondary />
                        <CardFace face={"/assets/images/flash/face1.webp"} card={`/assets/images/flash/face1.webp`} />
                        <CardFace face={"/assets/images/flash/face2.webp"} card={`/assets/images/flash/face2.webp`} />
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