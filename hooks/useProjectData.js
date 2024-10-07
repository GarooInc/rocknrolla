// hooks/useProjectData.js
"use client";
import { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';

const useProjectData = (projectId) => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!projectId) return;

    const pb = new PocketBase('https://dev.rocknrolla23.com');
    pb.autoCancellation(false);

    const fetchData = async () => {
      setLoading(true);
      try {
        const record = await pb.collection('Proyects').getOne(projectId);
        setProject(record);
      } catch (error) {
        console.error("Error fetching project data: ", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [projectId]);

  return { project, loading, error };
};

export default useProjectData;
