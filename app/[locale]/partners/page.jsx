import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import NavBar from '@/components/NavBar/NavBar'
import LineTitle from '@/components/LineTitle/LineTitle'
import Footer from '@/components/Footer/Footer'
import LineButton from '@/components/LineButton/LineButton'
import PartnersItem from '@/components/PartnersItem/PartnersItem'

const namespaces = ['partners', 'general', 'navBar']

export default async function Partners({ params: { locale } }) {
    const { t, resources } = await initTranslations(locale, namespaces)
    
    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className='min-h-screen bg-white'>
            <NavBar/>
            <div className='md:pt-24 pt-10 pb-40 md:px-0 px-8 gap-10 flex flex-col relative items-center'>
                <LineTitle text={t('partners:partners')} secondary />
                <PartnersItem />
                <div className='absolute md:bottom-0 z-10 bottom-10'>
                    <LineButton text={t('general:back')} secondary />
                </div>
            </div>
            <Footer />            
        </div>
        </TranslationsProvider>
    )
}