import React, { PureComponent } from 'react';
import './App.css'
import { Searchbar } from './Searchbar/Searchbar'
import { ImageGallery } from './ImageGallery/ImageGallery'
import { Button } from './Button/Button'
import { Modal } from './Modal/Modal'
import { fetchImages }  from './Api/Api';

class App extends PureComponent {
  state = {
    query: '',
    currentPage: 1,
    images: [],
    loading: false,
    error: false,
    loadMore: false,
  }

 
  async componentDidUpdate(prevProps, prevState) {
    
    try {
    const { page, query, currentPage } = this.state;
    this.setState({loading: true})
      if (page !== prevState.page || query !== prevState.query) {
          const fetchedImages = await fetchImages(currentPage, query);
      this.setStete({
         images: [...prevState.images, ...fetchedImages.hits],
        loadMore: currentPage < Math.ceil(fetchedImages.totalHits / 12),
        error: false
            })
      }
    
    } catch (error) {
      this.setState({ error: true })
}finally {
      this.setState({ loading: false });
    }
  }
  
  onFormSubmit = ({ value }) => {
      this.setState({ query: value });
        console.log(value);

    if (this.state.query === value) {
      return;
    } else {
      this.setState({
        images: [],
        page: 1,
      });
    }
  
  }

  onLoadMore = () => {
    this.setState(prevState => ({
         page: prevState.page + 1  
        }));
  }
 
  
render() {
    const { images, loading, error} = this.state;
  return(
    <div className="App">
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      <Searchbar onSubmit={ this.onFormSubmit} />
      {loading && <p>Loading...</p>}
      {images.length > 0 ? <ImageGallery images={images} /> : null}
      {images.length ? <Button onLoadMore={ this.onLoadMore} /> : null }
      <Modal />
    </div>
  )
  };
}

export default App;