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
    { cover: '/assets/images/groups/covers/g1.png', logo: '/assets/images/groups/logos/brands.svg' , link: '/brands'},
    { cover: '/assets/images/groups/covers/g2.png', logo: '/assets/images/groups/logos/buzz.svg' , link: '/buzz'},
    { cover: '/assets/images/groups/covers/g3.png', logo: '/assets/images/groups/logos/future.svg' , link: '/future'},
    { cover: '/assets/images/groups/covers/g4.png', logo: '/assets/images/groups/logos/flash.png' , secondary: true, link: '/flash'},
  ]

  return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
    <main className='min-h-screen bg-white'>
      <h1 className='hidden'>Rocknrolla 23</h1>
      <NavBar />
      <div className='flex md:flex-row flex-col w-full justify-center items-stretch md:gap-10'>
        <div className='w-full flex flex-col md:gap-10'>
          <div className='flex md:flex-row flex-col-reverse justify-between items-stretch w-full md:gap-10'>
              <div className='group_main'>
                {
                  groups.map((group, index) => (
                    <Group cover={group.cover} logo={group.logo} key={index} secondary={group.secondary} link={group.link} />
                  ))
                }
                <span className='top_text'>{t('home:groups')}</span>
              </div>
              <div className='flex flex-col md:basis-[80%] md:gap-10'>
                <img src='/assets/images/home/principalgif.gif' alt='Highlight' className='w-full md:h-[600px] sm:h-[400px] h-[350px] object-cover' />
                <div className='flex md:gap-10 w-full justify-between h-full'>
                  <div className='w-1/2 flex-1'>
                    <Banner title={t('home:work')} button={t('home:culture')} secondary link={'/culture'} />
                  </div>
                  <div className='w-1/2 flex-1'>
                    <Banner title={t('home:innegotiable')} button={t('home:innegotiables')} secondary link={'/non-negotiable'} />
                  </div>
                </div>
              </div>
          </div>
          <Banner title={t('home:last_work')} button={t('home:view')} image={'/assets/images/home/fresh.webp'} link={'/project/toledoyunainvitacionimpostergable_9lg0qrheaz2r7xd'} />
          <Banner double secondary title={t('home:innovation')} button={t('home:find')} link={'/vision'} />
          <Banner  title={t('home:blog')} button={t('home:view')} link={'/blog'} />
          <div className='md:flex md:flex-row flex-col justify-between items-stretch w-full gap-10 hidden'>
            <div className='md:w-1/2'>
              <Media />
            </div>
            <div className='md:w-1/2'>
              <Banner title={t('home:alleys')} button={t('home:view')} secondary link={'/partners'} />
            </div>
          </div>
        </div>
        <Highlights />
        {/* Mobile */}
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
