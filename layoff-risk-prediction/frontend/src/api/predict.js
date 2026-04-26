import axios from 'axios';

// Using relative path triggers the proxy (Vite locally, NGINX in Docker)
const API_BASE_URL = '/api';

export const fetchPrediction = async (formData) => {
  try {
    // Artificial 1-second delay so the UX smooth loading state is actually visible!
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const response = await axios.post(`${API_BASE_URL}/predict`, formData);
    return response.data;
  } catch (error) {
    console.error("Prediction API Error:", error);
    if (error.response && error.response.data && error.response.data.detail) {
        throw new Error(error.response.data.detail);
    }
    throw new Error('Failed to connect to the backend prediction service.');
  }
};

export const fetchMetadataLists = async () => {
  try {
    const [ind, dept] = await Promise.all([
      axios.get(`${API_BASE_URL}/industries`),
      axios.get(`${API_BASE_URL}/departments`)
    ]);
    return {
      industries: ind.data.industries || [],
      departments: dept.data.departments || []
    };
  } catch (error) {
    console.error("Failed to fetch metadata lists:", error);
    return { industries: [], departments: [] };
  }
};
