"use client";

import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import LineButton from '@/components/LineButton/LineButton';
import useBlogData from '@/hooks/useBlogData';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import BlogItem from '@/components/BlogItem/BlogItem';

const namespaces = ['general', 'navBar'];

export default function BlogProyect({ params }) {
  const { locale, id } = params;

  const blogId = id.split('_')[1];

  const { blog, loading, error } = useBlogData(blogId);

  const [translations, setTranslations] = useState({ t: () => '', resources: {} });

  useEffect(() => {
    const loadTranslations = async () => {
      const { t, resources } = await initTranslations(locale, namespaces);
      setTranslations({ t, resources });
    };
    loadTranslations();
  }, [locale]);

  const { t, resources } = translations;
  const api = process.env.NEXT_PUBLIC_API_URL;

  const formattedTitle = blog ? blog[`title_${locale}`] : 'Blog';
  const bannerImage = blog
    ? `${api}/api/files/${blog.collectionId}/${blog.id}/${blog.cover}`
    : '';

  if (loading || !t) {
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <span className="loading loading-spinner text-neutral"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <span className='text-red-500'>Error fetching project data. Please try again later.</span>
      </div>
    );
  }

  return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
      <Head>
        <title>{formattedTitle}</title>
        <meta property="og:title" content={formattedTitle} />
        <meta property="og:description" content={blog ? blog[`desc_${locale}`] : 'Project details'} />
        <meta property="og:image" content={bannerImage} />
        <meta property="og:url" content={`https://tu-dominio.com/project/${id}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={formattedTitle} />
        <meta name="twitter:description" content={blog ? blog[`desc_${locale}`] : 'Project details'} />
        <meta name="twitter:image" content={bannerImage} />
      </Head>
      <div className='min-h-screen flex flex-col md:bg-gray-100 bg-white'>
        <NavBar />
        <BlogItem blogId={blogId} />
        <div className='py-4 w-full justify-center flex xl:px-40 md:px-20 md:bg-gray-100'>
          <LineButton text={t('general:back')} secondary />
        </div>
        <Footer />
      </div>
    </TranslationsProvider>
  );
}