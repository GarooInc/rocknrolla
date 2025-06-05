import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import NavBar from '@/components/NavBar/NavBar'
import LineTitle from '@/components/LineTitle/LineTitle'
import LineButton from '@/components/LineButton/LineButton'
import CustomDatePicker from '@/components/CustomDatePicker/CustomDatePicker'
import Footer from '@/components/Footer/Footer'
import ContactForm from '@/components/ContactForm/ContactForm'

const namespaces = ['jobs', 'jobtypes', 'navBar','general']

export default async function JobApplication({ params: { locale } }) {
    const { t, resources } = await initTranslations(locale, namespaces)
    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className='min-h-screen  backroundform'>
            <NavBar secondary/>
            <div className='container_page px-10 relative justify-center items-center'>
                <ContactForm/>
            </div>
            <Footer />
        </div>
        </TranslationsProvider>
    )
}