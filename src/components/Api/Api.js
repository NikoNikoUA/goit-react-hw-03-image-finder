import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38986631-ae11b42db00bd05f0f2571500';

export async function FetchImages() {
  const params = new URLSearchParams({
    key: API_KEY,

    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    q: 'query',
    page: 1,
    per_page: 12,
  });

  try {
    this.setState({ loading: true, error: false });
    const response = await axios.get(`${BASE_URL}?${params}`);
    this.setState({ images: response.data.hits });
  } catch (error) {
    this.setState({ error: true });
  } finally {
    this.setState({ loading: false });
  }
}
