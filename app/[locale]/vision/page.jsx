import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import NavBar from '@/components/NavBar/NavBar'
import VideoCover from '@/components/VideoCover/VideoCover'
import Footer from '@/components/Footer/Footer'
import LineButton from '@/components/LineButton/LineButton'

const namespaces = ['vision', 'navBar', "general"]

export default async function Vision({ params: { locale } }) {
    const { t, resources } = await initTranslations(locale, namespaces)

    const paragraphs = [
        t('vision:vision_p1'),
        t('vision:vision_p2'),
        t('vision:vision_p3'),
        t('vision:vision_p4'),
        t('vision:vision_p5'),
        t('vision:vision_p6'),
        t('vision:vision_p7'),
        t('vision:vision_p8'),
        t('vision:vision_p9'),
        t('vision:vision_p10'),
    ]
    
    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className='min-h-screen bg-white'>
            <NavBar secondary/>
            <div className='flex flex-col items-center'>
                <VideoCover
                    coverImage={"/assets/images/vision/cover.webp"}
                    videoUrl='/assets/images/home/demo.mp4'
                />
                <div className='md:px-20 px-10 pt-20 pb-40 flex flex-col gap-10 relative justify-center items-center'>
                    <div className='flex gap-4 w-full justify-start'>
                        <img src='/assets/images/vision/fede.webp' alt='Vision 1' className='md:w-36 w-32'/>
                        <div className='flex flex-col justify-end p-2'>
                            <h2 className='text-xl font-garamond text-black font-bold'>{t('vision:vision_name')}</h2>
                            <p className='text-sm text-black font-certia'>{t('vision:vision_worktype')}</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 md:gap-8 w-full'>
                        {paragraphs.map((paragraph, index) => (
                            <p key={index} className='text-lg text-center font-medium text-black font-certia'>{paragraph}</p>
                        ))}
                    </div>
                    <div className='absolute md:bottom-0 z-10 bottom-10'>
                        <LineButton text={t('general:back')} secondary />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </TranslationsProvider>
    )
}

