import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import ProjectItem from '@/components/ProjectItem/ProjectItem';


const namespaces = ['general', 'navBar']

export default async function Project({ params }) {
    const { locale, id } = params;
    const { t, resources } = await initTranslations(locale, namespaces)
    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <div className='min-h-screen bg-white'>
            <NavBar/>
            <ProjectItem projectId={id} />
            <Footer />
        </div>
        </TranslationsProvider>
    )
}

