import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import NavBar from '@/components/NavBar/NavBar'

const namespaces = ['vision', 'navBar']

export default async function Vision({ params: { locale } }) {
    const { t, resources } = await initTranslations(locale, namespaces)
    
    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <main className='min-h-screen bg-white'>
            <NavBar secondary/>
            <div className='flex flex-col items-center md:gap-10 gap-8 md:pt-32 pt-10 pb-40 md:px-0 px-8 relative'>
                <div className='flex flex-col gap-4 md:gap-6 md:pt-0 pt-4'>
                    <h1 className='titletext_card text-black uppercase'>
                        {t('vision:vision_title')}
                    </h1>
                    <p className='text_title text-black'>
                        {t('vision:vision_text')}
                    </p>
                </div>
            </div>
        </main>
        </TranslationsProvider>
    )
}

