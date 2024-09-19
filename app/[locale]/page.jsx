import React from 'react'
import initTranslations from '../i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import NavBar from '@/components/NavBar/NavBar';

const namespaces = ['home', 'navBar']

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, namespaces)

  return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
    <main className='min-h-screen bg-white'>
      <NavBar />
    </main>
    </TranslationsProvider>

  );
}
