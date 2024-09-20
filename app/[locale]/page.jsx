import React from 'react'
import initTranslations from '../i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import NavBar from '@/components/NavBar/NavBar';
import Group from '@/components/Group/Group';
import LineButton from '@/components/LineButton/LineButton';
import Banner from '@/components/Banner/Banner';

const namespaces = ['home', 'navBar']

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, namespaces)

  const groups = [
    { cover: '/assets/images/groups/covers/g1.png', logo: '/assets/images/groups/logos/brands.png' },
    { cover: '/assets/images/groups/covers/g2.png', logo: '/assets/images/groups/logos/buzz.png' },
    { cover: '/assets/images/groups/covers/g3.png', logo: '/assets/images/groups/logos/future.png' },
    { cover: '/assets/images/groups/covers/g4.png', logo: '/assets/images/groups/logos/flash.png' , secondary: true},
  ]

  return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
    <main className='min-h-screen bg-white'>
      <NavBar />
      <div className='flex w-full justify-center items-center'>
        <div className='w-full flex flex-col gap-10'>
          <div className='flex justify-between items-stretch w-full gap-10'>
            <div className='flex flex-col w-[20%] shadow-md'>
              {
                groups.map((group, index) => (
                  <Group cover={group.cover} logo={group.logo} key={index} secondary={group.secondary} />
                ))
              }
            </div>
              <div className='flex flex-col w-[80%] gap-10'>
                <img src='/assets/images/home/principal.png' alt='Highlight' className='w-full h-[600px] object-cover' />
                <Banner title={t('home:work')} button={t('home:culture')} secondary />
              </div>
          </div>
          <Banner title={t('home:last_work')} button={t('home:view')} />
          <Banner secondary title={t('home:innovation')} button={t('home:find')} />
        </div>
        <div className='flex justify-center items-center w-[20%] flex-col'>
        </div>
      </div>
    </main>
    </TranslationsProvider>

  );
}
