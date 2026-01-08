import { useState } from 'react';

const useScanGithub = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const scanGithub = async (username) => {
    setLoading(true);
    try {
      // API call to scan GitHub
      // const response = await api.scanGithub(username);
      // setResult(response.data);
    } catch (error) {
      console.error('Error scanning GitHub:', error);
    } finally {
      setLoading(false);
    }
  };

  return { result, loading, scanGithub };
};

export default useScanGithub;