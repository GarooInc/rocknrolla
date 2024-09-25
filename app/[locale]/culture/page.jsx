import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import NavBar from '@/components/NavBar/NavBar'
import TitleText from '@/components/TitleText/TitleText'
import LineTitle from '@/components/LineTitle/LineTitle'
import Footer from '@/components/Footer/Footer'
import CustomCard from '@/components/CustomCard/CustomCard'
import LineButton from '@/components/LineButton/LineButton'

const namespaces = ['culture', 'navBar']

export default async function Culture({ params: { locale } }) {
    const { t, resources } = await initTranslations(locale, namespaces)
    
    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <main className='min-h-screen bg-white'>
            <NavBar secondary/>
            <div className='flex flex-col items-center md:gap-10 gap-8 md:pt-32 pt-10 pb-40 md:px-0 px-8 relative'>
                <div className='md:hidden w-full'>
                    <CustomCard title={t('culture:culture_cardTitle')} text={t('culture:culture_cardText')} />
                </div>
                <div className='flex flex-col gap-4 md:gap-6 md:pt-0 pt-4'>
                    <LineTitle text={t('culture:culture_title1')} secondary />
                    <TitleText title={t('culture:culture_text1')}/>
                </div>
                <div className='separator'></div>
                <div className='flex flex-col gap-4 md:gap-6'>
                    <LineTitle text={t('culture:culture_title2')} secondary />
                    <TitleText title={t('culture:culture_text2_1')} desc={t('culture:culture_text2')}/>
                    <TitleText title={t('culture:culture_text2_3')} desc={t('culture:culture_text2_4')}/>
                    <TitleText title={t('culture:culture_text2_5')} desc={t('culture:culture_text2_6')}/>
                    <TitleText title={t('culture:culture_text2_7')} desc={t('culture:culture_text2_8')}/>
                </div>
                <div className='separator'></div>
                <TitleText title={t('culture:culture_text2_9')}/>
                <div className='separator'></div>
                <TitleText title={t('culture:culture_text2_10')} desc={t('culture:culture_text2_11')}/>
                <div className='separator'></div>
                <TitleText title={t('culture:culture_text2_12')} desc={t('culture:culture_text2_13')}/>
                <div className='separator'></div>
                <TitleText title={t('culture:culture_text2_14')} desc={t('culture:culture_text2_15')}/>
                <div className='absolute md:bottom-0 z-10 bottom-10'>
                    <LineButton text={t('culture:culture_button')} secondary />
                </div>
            </div>
            <Footer />
        </main>
        </TranslationsProvider>
    )
}

