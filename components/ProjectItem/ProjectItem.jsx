"use client";
import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import useFormattedTitle from '@/hooks/useFormattedTitle';
import { useTranslation } from 'react-i18next';

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
      <div className='md:pt-24 pt-10 pb-40 md:px-0 px-8 gap-10 flex flex-col relative items-center'>
        {project ? (
          <h1>{formattedTitle}</h1>
        ) : (
          <div>Cargando proyecto...</div>
        )}
      </div>
  );
};

export default ProjectItem;
