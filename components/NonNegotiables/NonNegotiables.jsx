"use client"
import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import CustomCard from '../CustomCard/CustomCard';
import { useTranslation } from 'react-i18next';


const NonNegotiables = () => {
    const [nonNegotiables, setNonNegotiables] = useState(null);
    const api = process.env.NEXT_PUBLIC_API_URL;
    const pb = new PocketBase(api);
    pb.autoCancellation(false);
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const records = await pb.collection('non_negotiable').getFullList({
                    sort: 'created',
                });
                setNonNegotiables(records);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData()
    }, [])

  return (
    <div className='non_negotiable_main'>
        {
            nonNegotiables && nonNegotiables.map((nonNegotiable, index) => (
                <CustomCard key={index} title={nonNegotiable[`title_${currentLocale}`]} text={nonNegotiable[`text_${currentLocale}`]} />
            ))
        }
    </div>
  )
}

export default NonNegotiables