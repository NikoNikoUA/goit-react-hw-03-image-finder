import axios from 'axios';

const API_KEY = '38986631-ae11b42db00bd05f0f2571500';

axios.defaults.baseURL = 'https://pixabay.com/api';
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
};

export const fetchImages = async (query, currentPage = '1') => {
  const response = await axios.get(`?q=${query}&page=${currentPage}`);
  console.log(response);
  return response.data;
};
