import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import NavBar from '@/components/NavBar/NavBar'
import ImgBanner from '@/components/ImgBanner/ImgBanner'
import LineTitle from '@/components/LineTitle/LineTitle'

const namespaces = ['brands', 'navBar','general']

export default async function Brands({ params: { locale } }) {
    const { t, resources } = await initTranslations(locale, namespaces)
    
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
            <div className='container_page'>
                    <LineTitle text={t('general:sucess_cases')} secondary />
            </div>
        </div>
        </TranslationsProvider>
    )
}