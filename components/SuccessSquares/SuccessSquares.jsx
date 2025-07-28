"use client"
import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import { useTranslation } from 'react-i18next';
import { FaPlus } from "react-icons/fa6";
import { useRouter } from 'next/navigation';


const SuccessSquares = ({ tag }) => {
    const [successSquares, setSuccessSquares] = useState(null);
    const api = process.env.NEXT_PUBLIC_API_URL;
    const pb = new PocketBase(api);
    pb.autoCancellation(false);
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const records = await pb.collection('Proyects').getFullList({
                    sort: 'created',
                    filter: `tag = "${tag}"`,
                });
                setSuccessSquares(records);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, [tag]);


    const removeAccents = (str) => {
        return str
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '') 
          .replace(/[^a-zA-Z0-9-_]/g, ''); 
    }

    const generateSlug = (str) => {
    return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // elimina acentos
        .replace(/[^a-zA-Z0-9\s]/g, '') // elimina caracteres especiales
        .trim()
        .replace(/\s+/g, '-')           // reemplaza espacios con guiones
        .toLowerCase();
    };


    const handleNavigate = (successSquare) => {
        const title = successSquare[`title_${currentLocale}`];
        successSquare && successSquare.videos != null ? 
        router.push(`/project/${generateSlug(title)}-${successSquare.id}`) : 
        " ";
    }


    return (
        <div className='flex md:flex-wrap md:flex-row flex-col md:px-32 gap-0'>
            {successSquares && successSquares.map((successSquare, index) => (
                <div key={index} className='md:w-1/2 w-full relative animation cursor-pointer' onClick={() => handleNavigate(successSquare)}>
                    <img
                        src={`${api}/api/files/${successSquare.collectionId}/${successSquare.id}/${successSquare.minicover}?token=`}
                        alt={successSquare[`text_minicover_${currentLocale}`]}
                        className='w-full md:h-[300px] object-cover'
                    />
                    <FaPlus className='absolute top-4 right-4 text-white cursor-pointer text-xl' />
                    {
                        successSquare[`text_minicover_${currentLocale}`] &&
                        <div className='absolute bottom-4 left-4 p-2'>
                            <span className='uppercase font-certia font-bold text-white tracking-wider md:text-xl text-lg'>{successSquare[`text_minicover_${currentLocale}`]}</span>
                        </div>
                    }
                </div>
            ))}
        </div>
    );
};

export default SuccessSquares;