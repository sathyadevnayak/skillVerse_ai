import { useState, useEffect } from 'react';

const useRoadmap = () => {
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateRoadmap = async (data) => {
    setLoading(true);
    try {
      // API call to generate roadmap
      // const response = await api.generateRoadmap(data);
      // setRoadmap(response.data);
    } catch (error) {
      console.error('Error generating roadmap:', error);
    } finally {
      setLoading(false);
    }
  };

  return { roadmap, loading, generateRoadmap };
};

export default useRoadmap;