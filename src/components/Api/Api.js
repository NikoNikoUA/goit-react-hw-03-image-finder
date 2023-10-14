import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38986631-ae11b42db00bd05f0f2571500';

export const fetchImages = async (query, currentPage = '1') => {
  const params = new URLSearchParams({
    key: API_KEY,

    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    q: query,
    page: currentPage,
    per_page: 12,
  });

  const response = await axios.get(`${BASE_URL}?${params}`);
  return response.data;
};
