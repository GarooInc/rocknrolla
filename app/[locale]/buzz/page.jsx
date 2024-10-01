import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import NavBar from '@/components/NavBar/NavBar'
import ImgBanner from '@/components/ImgBanner/ImgBanner'
import LineTitle from '@/components/LineTitle/LineTitle'
import Footer from '@/components/Footer/Footer'
import LineButton from '@/components/LineButton/LineButton'
import CardFace from '@/components/CardFace/CardFace'
import CardLogos from '@/components/CardLogos.jsx/CardLogos'
import VideoCover from '@/components/VideoCover/VideoCover'

const namespaces = ['buzz', 'navBar','general']

export default async function Buzz({ params: { locale } }) {
    const currentLocale = locale === 'en' ? 'en' : 'es'
    const { t, resources } = await initTranslations(locale, namespaces)
    
    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className='min-h-screen bg-white'>
            <NavBar secondary/>
            <ImgBanner
                backgroundImageDesktop={'/assets/images/buzz/desktop.webp'}
                backgroundImageMobile={'/assets/images/buzz/mobile.webp'}
                text={t('buzz:buzz_text')}
                logo='/assets/images/buzz/logo.webp'
            />
            <div className='container_page relative justify-center items-center'>
                    <div className='flex flex-col gap-10 md:gap-12'>
                        <LineTitle text={t('general:brandsterritory')} secondary />
                        <CardLogos />
                    </div>
                    <div className='flex flex-col gap-10 md:gap-12'>
                        <LineTitle text={t('buzz:buzz_text2')} secondary />
                        <VideoCover
                            coverImage={"/assets/images/buzz/videoCover.webp"}
                            videoUrl='/assets/images/home/demo.mp4'
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center w-full gap-10'>
                        <LineTitle text={t('general:leadership')} secondary />
                        <CardFace face={"/assets/images/buzz/face1.webp"} card={`/assets/images/buzz/card1_${currentLocale}.png`} />
                        <CardFace face={"/assets/images/buzz/face2.webp"} card={`/assets/images/buzz/card2_${currentLocale}.png`} />
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