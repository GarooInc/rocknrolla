import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import NavBar from '@/components/NavBar/NavBar'
import ImgBanner from '@/components/ImgBanner/ImgBanner'
import LineTitle from '@/components/LineTitle/LineTitle'

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
            <div className='container_page'>
                    <LineTitle text={t('general:sucess_cases')} secondary />
            </div>
        </div>
        </TranslationsProvider>
    )
}