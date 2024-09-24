import React from 'react'
import initTranslations from '../i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import NavBar from '@/components/NavBar/NavBar';
import Group from '@/components/Group/Group';
import Banner from '@/components/Banner/Banner';
import Media from '@/components/Media/Media';
import Footer from '@/components/Footer/Footer';
import Highlights from '@/components/Highlights/Highlights';

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
      <div className='flex md:flex-row flex-col w-full justify-center items-stretch md:gap-10'>
        <div className='w-full flex flex-col md:gap-10'>
          <div className='flex md:flex-row flex-col-reverse justify-between items-stretch w-full md:gap-10'>
            <div className='flex md:flex-col md:w-[20%] shadow-md md:flex-nowrap flex-wrap'>
              {
                groups.map((group, index) => (
                  <Group cover={group.cover} logo={group.logo} key={index} secondary={group.secondary} />
                ))
              }
            </div>
              <div className='flex flex-col md:w-[80%] md:gap-10'>
                <img src='/assets/images/home/principalgif.gif' alt='Highlight' className='w-full md:h-[600px] h-[400px] object-cover' />
                <Banner title={t('home:work')} button={t('home:culture')} secondary />
              </div>
          </div>
          <Banner title={t('home:last_work')} button={t('home:view')} />
          <Banner double secondary title={t('home:innovation')} button={t('home:find')} />
          <div className='md:flex md:flex-row flex-col justify-between items-stretch w-full gap-10 hidden'>
            <div className='md:w-1/2'>
              <Media />
            </div>
            <div className='md:w-1/2'>
              <Banner title={t('home:alleys')} button={t('home:view')} secondary />
            </div>
          </div>
        </div>
        <Highlights />
        <div className='md:hidden flex flex-col justify-between items-stretch w-full'>
            <div className='md:w-1/2'>
              <Media />
            </div>
            <div className='md:w-1/2'>
              <Banner title={t('home:alleys')} button={t('home:view')} secondary />
            </div>
          </div>
      </div>
      <Footer />
    </main>
    </TranslationsProvider>

  );
}
