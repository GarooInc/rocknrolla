"use client";
import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import useFormattedTitle from '@/hooks/useFormattedTitle';
import { useTranslation } from 'react-i18next';
import ImgBanner from '../ImgBanner/ImgBanner';
import VimeoEmbed from '../VimeoEmbed/VimeoEmbed';

const ProjectItem = ({ projectId }) => {
    const [project, setProject] = useState(null);
    const pb = new PocketBase('https://dev.rocknrolla23.com');
    pb.autoCancellation(false);
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const record = await pb.collection('Proyects').getOne(projectId);
        setProject(record);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    if (projectId) {
      fetchData();
    }
  }, [projectId]);

  const formattedTitle = useFormattedTitle(project ? project[`title_${currentLocale}`] : '');

  return (
      <div className='flex flex-col relative items-center'>
        {project ? (
          <>
            <ImgBanner
              backgroundImageMobile={`https://dev.rocknrolla23.com/api/files/${project.collectionId}/${project.id}/${project.banner_img_mobile}?token=`}
              backgroundImageDesktop={`https://dev.rocknrolla23.com/api/files/${project.collectionId}/${project.id}/${project.banner_img_desktop}?token=`}
            />
            <div className='flex flex-col items-center gap-8 md:py-20 pt-10 pb-20'>
              <div className='flex flex-col items-center gap-4 xl:px-40 md:px-20 px-10'>
                <div className='flex flex-col items-start justify-start w-full gap-2 py-4'>
                  <span className='text-black md:text-2xl text-lg font-certia font-medium italic tracking-widest'>
                    {project.tag} &gt;
                  </span>
                  <h1 className='text-2xl md:text-3xl xl:text-4xl leading-6 tracking-wide font-certia text-black font-bold'>{formattedTitle}</h1>
                </div>
                <p className='font-certia text-lg xl:text-xl leading-6 tracking-wide text-center text-black font-semibold'
                  dangerouslySetInnerHTML={{ __html: project[`description_${currentLocale}_rich`] }}
                ></p>
              </div>
              {console.log(project.videos)}
              {
                project.videos && (
                    <div className='flex flex-col items-center gap-4 w-full'>
                      {
                        project.videos.map((video, index) => (
                          <div className='flex flex-col items-start gap-4 md:w-[600px] md:h-[400px] w-full relative mb-4' key={index}>
                            <VimeoEmbed id={video.id} />
                            <span className='font-certia text-sm text-black absolute md:bottom-4 -bottom-4 left-2'>{video.year} | {video.title}</span>
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
