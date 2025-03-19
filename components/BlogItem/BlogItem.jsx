"use client";
import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import useFormattedTitle from '@/hooks/useFormattedTitle';
import { useTranslation } from 'react-i18next';
import ImgBanner from '../ImgBanner/ImgBanner';
import VimeoEmbed from '../VimeoEmbed/VimeoEmbed';
import Head from 'next/head';

const BlogItem = ({ blogId }) => {
  const [blog, setBlog] = useState(null);
  const [thumbnails, setThumbnails] = useState({});
  const api = process.env.NEXT_PUBLIC_API_URL;
  const pb = new PocketBase(api);
  pb.autoCancellation(false);
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const record = await pb.collection('blog').getOne(blogId);
        setBlog(record);

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

    if (blogId) {
      fetchData();
    }
  }, [blogId]);

  const formattedTitle = useFormattedTitle(blog ? blog[`title_${currentLocale}`] : '');

  const mediaFinal = blog ? [
    { img: "/assets/images/media/4.png", link:`mailto:?subject=${encodeURIComponent(formattedTitle)}&body=${encodeURIComponent(window.location.href)}`},
    { img: "/assets/images/media/1.png", link: `https://www.instagram.com/share?url=${encodeURIComponent(window.location.href)}` },
    { img: "/assets/images/media/3.png", link: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(formattedTitle)}&summary=${encodeURIComponent(blog[`desc_${currentLocale}`])}` },
    { img: "/assets/images/media/5.png", link: "/" },
  ] : [];

  const banner = blog ? `${api}/api/files/${blog.collectionId}/${blog.id}/${blog.cover}?token=` : '';


  return (
    <div className='flex flex-col relative items-center xl:px-40 md:px-20 md:bg-gray-100'>
      <Head>
        <title>{formattedTitle}</title>
        <meta property="og:title" content={formattedTitle} />
        <meta property="og:description" content={blog ? blog[`desc_${currentLocale}`] : 'Blog details'} />
        <meta property="og:image" content={banner} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={formattedTitle} />
        <meta name="twitter:description" content={blog ? blog[`desc_${currentLocale}`] : 'Blog details'} />
        <meta name="twitter:image" content={banner} />
      </Head>
      {blog ? (
        <>
          <ImgBanner
            backgroundImageMobile={`${api}/api/files/${blog.collectionId}/${blog.id}/${blog.cover}?token=`}
            backgroundImageDesktop={`${api}/api/files/${blog.collectionId}/${blog.id}/${blog.cover}?token=`}
          />
          <div className='flex flex-col items-center gap-8 md:pb-20 pt-10 pb-20 bg-white w-full'>
            <div className='flex flex-col items-center gap-4 px-10 md:px-14'>
              <div className='flex flex-col items-start justify-start w-full gap-2 py-4 '>
                <h1 className='text-xl md:text-3xl xl:text-4xl leading-6 tracking-wider font-certia text-black font-bold uppercase'>{formattedTitle}</h1>
              </div>
              <p className='font-certia text-lg xl:text-xl leading-6 tracking-wide text-justify text-black font-semibold blogitem'
                dangerouslySetInnerHTML={{ __html: blog[`info_${currentLocale}`] }}
              ></p>
            </div>
            {
              blog.videos && (
                <div className='flex flex-col items-center w-full'>
                  {
                    blog.videos.map((video, index) => (
                      <div className='flex flex-col items-start gap-4 md:w-[600px] md:h-[400px] w-full relative' key={index}>
                        <VimeoEmbed id={video.id} thumbnail={`${api}/api/files/${thumbnails[video.id]?.collectionId}/${thumbnails[video.id]?.id}/${thumbnails[video.id]?.image}?token=`} />
                      </div>
                    ))
                  }
                  <span className='font-certia text-sm text-black md:w-[600px] text-justify md:p-0 p-10'
                    dangerouslySetInnerHTML={{ __html: blog[`credits_${currentLocale}`] }}
                  ></span>
                </div>
              )
            }
            <div className='shadow-lg md:w-3/4 p-4 bg-white flex justify-between items-center md:px-10 w-4/5'>
              <h2 className='md:text-sm text-xs font-bold text-black md:w-1/4 w-1/2 italic font-certia underline'>Compartir {">"}</h2>
              <div className='flex gap-4 justify-between items-center md:w-3/4 w-1/2 '>
                {mediaFinal.map((media, index) => (
                  <a
                    key={index}
                    href={media.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center justify-center'
                  >
                    <img src={media.img} alt="Share icon" className="md:w-10 md:h-10 w-8 h-8 invert" />
                  </a>
                ))}
              </div>
            </div>
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

export default BlogItem;