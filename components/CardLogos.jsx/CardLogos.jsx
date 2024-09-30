"use client"
import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import { useTranslation } from 'react-i18next';

const CardLogos = () => {
    const [logos, setLogos] = useState(null);
    const pb = new PocketBase('https://dev.rocknrolla23.com');
    pb.autoCancellation(false);
    const { i18n } = useTranslation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const records = await pb.collection('buzz_logos').getFullList({
                    sort: 'created',
                });
                setLogos(records);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className='card_logos_main'>
            {
                logos && logos.map((logo, index) => (
                    <div className='card_logos_logo' key={index}>
                        <img src={`https://dev.rocknrolla23.com/api/files/${logo.collectionId}/${logo.id}/${logo.logo_img}?token=`} alt="logo" />
                    </div>
                ))
            }
        </div>
    );
}

export default CardLogos;