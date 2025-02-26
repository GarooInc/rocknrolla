"use client"
import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import Highlight from '../Highlight/Highlight';
import { useTranslation } from 'react-i18next';

const Highlights = () => {
    const [highlights, setHighlights] = useState(null);
    const api = process.env.NEXT_PUBLIC_API_URL;
    const pb = new PocketBase(api);
    pb.autoCancellation(false);
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const currentLocale = i18n.language;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const records = await pb.collection('Proyects').getFullList({
                    sort: 'created',
                    filter: `show_highlight = true`,
                });
                setHighlights(records);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className='highlight_main'>
            {
                highlights && highlights.map((highlight, index) => (
                    <Highlight key={index} img={`${api}/api/files/${highlight.collectionId}/${highlight.id}/${highlight.square_img}?token=`} title={highlight[`title_${currentLocale}`]} tag={highlight.tag} id={highlight.id} />
                ))
            }
            <span className='top_text'>{t('home:highlights')}</span>
        </div>
    );
}

export default Highlights;