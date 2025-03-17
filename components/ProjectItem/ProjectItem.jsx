"use client";
import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import useFormattedTitle from '@/hooks/useFormattedTitle';
import { useTranslation } from 'react-i18next';
import ImgBanner from '../ImgBanner/ImgBanner';
import VimeoEmbed from '../VimeoEmbed/VimeoEmbed';
import Head from 'next/head';

const ProjectItem = ({ projectId }) => {
  const [project, setProject] = useState(null);
  const [thumbnails, setThumbnails] = useState({});
  const api = process.env.NEXT_PUBLIC_API_URL;
  const pb = new PocketBase(api);
  pb.autoCancellation(false);
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const record = await pb.collection('Proyects').getOne(projectId);
        setProject(record);

        if (record.videos) {
          const thumbnailsData = {};
          const thumbnailRecords = await pb.collection('thumbnails').getFullList();

          for (const video of record.videos) {
            const thumbnailRecord = thumbnailRecords.find((thumbnail) => thumbnail.id_project === video.id);
            thumbnailsData[video.id] = thumbnailRecord;
          }
          setThumbnails(thumbnailsData);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    if (projectId) {
      fetchData();
    }
  }, [projectId]);

  const formattedTitle = useFormattedTitle(project ? project[`title_${currentLocale}`] : '');

  const banner = project ? `${api}/api/files/${project.collectionId}/${project.id}/${project.banner_img_mobile}?token=` : '';

  return (
    <div className='flex flex-col relative items-center xl:px-40 md:px-20 md:bg-gray-100'>
      <Head>
        <title>{formattedTitle}</title>
        <meta property="og:title" content={formattedTitle} />
        <meta property="og:description" content={project ? project[`description_${currentLocale}_rich`] : 'Project details'} />
        <meta property="og:image" content={banner} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={formattedTitle} />
        <meta name="twitter:description" content={project ? project[`description_${currentLocale}_rich`] : 'Project details'} />
        <meta name="twitter:image" content={banner} />
      </Head>
      {project ? (
        <>
          <ImgBanner
            backgroundImageMobile={`${api}/api/files/${project.collectionId}/${project.id}/${project.banner_img_mobile}?token=`}
            backgroundImageDesktop={`${api}/api/files/${project.collectionId}/${project.id}/${project.banner_img_desktop}?token=`}
          />
          <div className='flex flex-col items-center gap-8 md:pb-20 pt-10 pb-20 bg-white w-full'>
            <div className='flex flex-col items-center gap-4 px-10 md:px-14'>
              <div className='flex flex-col items-start justify-start w-full gap-2 py-4 '>
                <span className='text-black md:text-2xl text-lg font-certia font-medium italic tracking-widest'>
                  {project.tag} &gt;
                </span>
                <h1 className='text-xl md:text-3xl xl:text-4xl leading-6 tracking-wider font-certia text-black font-bold uppercase'>{formattedTitle}</h1>
              </div>
              <p className='font-certia text-lg xl:text-xl leading-6 tracking-wide text-center text-black font-semibold'
                dangerouslySetInnerHTML={{ __html: project[`description_${currentLocale}_rich`] }}
              ></p>
            </div>
            {
              project.videos && (
                <div className='flex flex-col items-center md:gap-4 gap-8 w-full'>
                  {
                    project.videos.map((video, index) => (
                      <div className='flex flex-col items-start gap-4 md:w-[600px] md:h-[400px] w-full relative mb-4' key={index}>
                        <VimeoEmbed id={video.id} thumbnail={`${api}/api/files/${thumbnails[video.id]?.collectionId}/${thumbnails[video.id]?.id}/${thumbnails[video.id]?.image}?token=`} />
                        <span className='font-certia text-sm text-black absolute md:bottom-4 -bottom-6 left-2'>{video.year} | {video.title}</span>
                      </div>
                    ))
                  }
                </div>
              )
            }
          </div>
        </>
      ) : (
        <div className='min-h-screen flex justify-center items-center'>
          <span className="loading loading-spinner text-neutral"></span>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;