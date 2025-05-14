import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import NavBar from '@/components/NavBar/NavBar'
import LineTitle from '@/components/LineTitle/LineTitle'
import LineButton from '@/components/LineButton/LineButton'
import InputField from '@/components/InputField/InputField'
import FileUpload from '@/components/FileUpload/FileUpload'
import SelectField from '@/components/SelectField/SelectField'
import RadioGroupButtons from '@/components/RadioGroupButtons/RadioGroupButtons'
import CustomDatePicker from '@/components/CustomDatePicker/CustomDatePicker'
import Footer from '@/components/Footer/Footer'

const namespaces = ['jobs', 'navBar','general']

export default async function JobApplication({ params: { locale } }) {
    const { t, resources } = await initTranslations(locale, namespaces)
    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className='min-h-screen bg-white'>
            <NavBar secondary/>
            <div className='container_page px-10 relative justify-center items-center'>
                    <div className='flex flex-col gap-4 w-full md:w-1/2 justify-center items-center'>
                        <LineTitle text={t('jobs:application')} secondary />
                        <div className='inputtype'>
                            <span className='labelform'>{t('jobs:date_input')}</span>
                            <CustomDatePicker />                        
                        </div>
                        <InputField label={t('jobs:job_input')} name="full_name" required />
                        <div className='inputtype'>
                            <span className='labelform'>{t('jobs:typejob_input')}</span>
                            <div className='flex gap-2'>
                                <RadioGroupButtons
                                    name="typejob"
                                    options={[
                                        { label: t('jobs:typecontract1'), value: t('jobs:typecontract1') },
                                        { label: t('jobs:typecontract2'), value: t('jobs:typecontract2') },
                                    ]}
                                    selected="fulltime"
                                />
                            </div>
                            <FileUpload label={t('jobs:pic_input')} name="pic" required />
                        </div>
                        <div className='pt-10'>
                            <LineTitle text={t('jobs:application')} secondary />
                        </div>

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