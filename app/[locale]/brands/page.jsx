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

const namespaces = ['brands', 'navBar','general']

export default async function Brands({ params: { locale } }) {
    const { t, resources } = await initTranslations(locale, namespaces)
    const currentLocale = locale === 'en' ? 'en' : 'es'    

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className='min-h-screen bg-white'>
            <NavBar secondary/>
            <ImgBanner
                backgroundImageDesktop={'/assets/images/brands/desktop.webp'}
                backgroundImageMobile={'/assets/images/brands/mobile.webp'}
                text={t('brands:brands_text')}
                logo='/assets/images/brands/logo.webp'
            />
            <div className='container_page relative justify-center items-center'>
                    <div className='flex flex-col gap-10 md:gap-12'>
                        <LineTitle text={t('general:sucess_cases')} secondary />
                        <SuccessSquares tag={"BRANDS"}/>
                    </div>
                    <div className='flex flex-col items-center justify-center w-full gap-10'>
                        <LineTitle text={t('general:leadership')} secondary />
                        <CardFace face={"/assets/images/brands/face2.webp"} card={`/assets/images/brands/card2_${currentLocale}.png`} />
                        <CardFace face={"/assets/images/brands/face1.webp"} card={`/assets/images/brands/card1_${currentLocale}.png`} />
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