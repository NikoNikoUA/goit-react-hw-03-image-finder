import React, { PureComponent } from 'react';
import axios from 'axios';
import './App.css'
import { Searchbar } from './Searchbar/Searchbar'
import { ImageGallery } from './ImageGallery/ImageGallery'
import { Button } from './Button/Button'
import {Modal} from './Modal/Modal'

class App extends PureComponent {
  state = {
    images: [],
    loading: false,
  error: null,
  }

  async componentDidMount() {

      const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '38986631-ae11b42db00bd05f0f2571500';
  const params = new URLSearchParams({
    key: API_KEY,
    // q: inputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 12,
  });
    
    this.setState({ loading: true });
  
    try {
      const response = await axios.get(`${BASE_URL}?${params}`);
      this.setState({ images: response.data.hits });
    } catch(error) {
    this.setState({ error });
  } finally {
    this.setState({loading: false})
     }
      
  }
 
  
  render() {
    const { images, loading, error } = this.state;
  return(
    <div className="App">
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      <Searchbar onSubmit={ this.componentDidMount} />
      {loading ? <p>Loading...</p> : <ImageGallery images={images} />}
      {images.length ? <Button /> : null }
      <Modal />
    </div>
  )};
};

export default App;