"use client"
import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import Highlight from '../Highlight/Highlight';

const Highlights = () => {
    const [highlights, setHighlights] = useState(null);
    const pb = new PocketBase('https://dev.rocknrolla23.com')
    pb.autoCancellation(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const records = await pb.collection('Highlights').getFullList({
                    sort: 'created',
                });
                setHighlights(records);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData()
    }, [])



  return (
    <div className='flex md:flex-col md:w-[20%] shadow-md md:flex-nowrap flex-wrap'>
        {
            highlights && highlights.map((highlight, index) => (
                <Highlight key={index} img={`https://dev.rocknrolla23.com/api/files/${highlight.collectionId}/${highlight.id}/${highlight.square_img}?token=`} title={highlight.title} />
            ))
        }
    </div>
  )
}

export default Highlights