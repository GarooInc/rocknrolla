"use client"
import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';


const BlogSquares = ({ tag }) => {
    const [blogs, setBlogs] = useState(null);
    const api = process.env.NEXT_PUBLIC_API_URL;
    const pb = new PocketBase(api);
    pb.autoCancellation(false);
    const { i18n, t } = useTranslation();
    const currentLocale = i18n.language;


    useEffect(() => {
        const fetchData = async () => {
            try {
                const records = await pb.collection('blog').getFullList({
                    sort: 'created',
                });
                setBlogs(records);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, [tag]);


    return (
        <div className='flex flex-col gap-12 md:px-32'>
            {blogs && blogs.map((blog, index) => (
                <div key={index} className='w-full flex md:flex-row flex-col gap-8 animation cursor-pointer'>
                    <img
                        src={`${api}/api/files/${blog.collectionId}/${blog.id}/${blog.cover}?token=`}
                        alt={blog[`title_${currentLocale}`]}
                        className='w-full md:h-[300px] object-cover flex-1'
                    />
                    <div className='flex-1 flex flex-col gap-2 relative md:p-2 p-8'>
                        {
                            blog[`title_${currentLocale}`] &&
                                <span className='uppercase font-certia font-bold text-black tracking-wider md:text-xl text-md'
                                    dangerouslySetInnerHTML={{ __html: blog[`title_${currentLocale}`] }}>
                                </span>
                        }
                        {
                            <p className='font-certia text-md xl:text-xl leading-6 tracking-wide text-start text-black font-semibold'
                            dangerouslySetInnerHTML={{ __html: blog[`desc_${currentLocale}`] }}
                            ></p>
                          
                        }
                        <div className='absolute md:bottom-2 md:right-2 bottom-4 right-8'>
                            <span className='text-black font-certia text-sm font-medium underline italic'>{t('general:read_now')}</span>
                            <span className='text-black font-certia text-sm font-medium italic '>{' >'}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogSquares;