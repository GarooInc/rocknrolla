import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import NavBar from '@/components/NavBar/NavBar'
import ImgBanner from '@/components/ImgBanner/ImgBanner'

const namespaces = ['buzz', 'navBar','general']

export default async function Buzz({ params: { locale } }) {
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
        </div>
        </TranslationsProvider>
    )
}