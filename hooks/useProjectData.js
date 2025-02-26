// hooks/useProjectData.js
"use client";
import { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';

const useProjectData = (projectId) => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const api = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (!projectId) return;

    const pb = new PocketBase(api);
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
