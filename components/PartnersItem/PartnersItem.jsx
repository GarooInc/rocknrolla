"use client"
import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import { useTranslation } from 'react-i18next';
import { FaArrowRight } from "react-icons/fa";

const PartnersItem = () => {
    const [partner, setPartners] = useState(null);

    const pb = new PocketBase('https://dev.rocknrolla23.com')
    pb.autoCancellation(false);
    const { i18n } = useTranslation();
    const { t } = useTranslation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const records = await pb.collection('partners').getFullList({
                    sort: 'created',
                });
                setPartners(records);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData()
    }, [])

  return (
    <div className='partners_main'>
        {
            partner && partner.map((partner, index) => (
                <div className="partners_card_container" key={index}>
                    <div className="custom_card_line"></div>
                    <div className='flex justify-start items-center gap-10'>
                        <img src={`https://dev.rocknrolla23.com/api/files/${partner.collectionId}/${partner.id}/${partner.logo}?token=`} alt="logo" className='md:w-40 md:h-40 w-24 h-24' />
                        <span className="md:text-xl text-lg font-bold font-garamond tracking-wider leading-6 text-white uppercase text-start">
                            {partner.name}
                        </span>
                    </div>
                    <button className='absolute bottom-4 right-4 cursor-pointer'>
                        <div className='flex justify-center items-center gap-4'>
                            <span className="text-white font-garamond italic md:text-xl text-lg">
                                {t('partners:go_to_website')}
                            </span>
                            <FaArrowRight className="text-white" />
                        </div>
                    </button>
                </div>
            ))
        }
    </div>
  )
}

export default PartnersItem