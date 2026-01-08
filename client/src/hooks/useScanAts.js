import { useState } from 'react';

const useScanAts = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const scanAts = async (resume) => {
    setLoading(true);
    try {
      // API call to scan ATS
      // const response = await api.scanAts(resume);
      // setResult(response.data);
    } catch (error) {
      console.error('Error scanning ATS:', error);
    } finally {
      setLoading(false);
    }
  };

  return { result, loading, scanAts };
};

export default useScanAts;