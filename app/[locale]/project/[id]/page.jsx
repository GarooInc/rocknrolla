"use client";

import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import ProjectItem from '@/components/ProjectItem/ProjectItem';
import LineButton from '@/components/LineButton/LineButton';
import useProjectData from '@/hooks/useProjectData';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const namespaces = ['general', 'navBar'];

export default function Project({ params }) {
  const { locale, id } = params;

  const projectId = id.split('_')[1];

  const { project, loading, error } = useProjectData(projectId);

  const [translations, setTranslations] = useState({ t: () => '', resources: {} });

  // Carga las traducciones
  useEffect(() => {
    const loadTranslations = async () => {
      const { t, resources } = await initTranslations(locale, namespaces);
      setTranslations({ t, resources });
    };
    loadTranslations();
  }, [locale]);

  const { t, resources } = translations;
  const api = process.env.NEXT_PUBLIC_API_URL;

  const formattedTitle = project ? project[`title_${locale}`] : 'Project';
  const bannerImage = project
    ? `${api}/api/files/${project.collectionId}/${project.id}/${project.banner_img_desktop}`
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
        <meta property="og:description" content={project ? project[`description_${locale}_rich`] : 'Project details'} />
        <meta property="og:image" content={bannerImage} />
        <meta property="og:url" content={`https://tu-dominio.com/project/${id}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={formattedTitle} />
        <meta name="twitter:description" content={project ? project[`description_${locale}_rich`] : 'Project details'} />
        <meta name="twitter:image" content={bannerImage} />
      </Head>
      <div className='min-h-screen flex flex-col md:bg-gray-100 bg-white'>
        <NavBar />
        <ProjectItem projectId={projectId} />
        <div className='py-4 w-full justify-center flex xl:px-40 md:px-20 md:bg-gray-100'>
          <LineButton text={t('general:back')} secondary />
        </div>
        <Footer />
      </div>
    </TranslationsProvider>
  );
}
