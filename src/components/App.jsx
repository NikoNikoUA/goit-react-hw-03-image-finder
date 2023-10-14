import React, { PureComponent } from 'react';
import './App.css'
import { Searchbar } from './Searchbar/Searchbar'
import { ImageGallery } from './ImageGallery/ImageGallery'
import { Button } from './Button/Button'
import { Modal } from './Modal/Modal'
import { FetchImages }  from './Api/Api';

class App extends PureComponent {
  state = {
    query: '',
    page: 1,
    images: [],
    loading: false,
    error: false,
    loadMore: false,
  }

 
async componentDidUpdate(prevProps, prevState) {
  const { page, query } = this.state;

  if (page !== prevState.page || query !== prevState.query) {
    const fetchedImages = await FetchImages(query, page);
    this.setState({
      images: [...prevState.images, ...fetchedImages.hits],
      loadMore: page < Math.ceil(fetchedImages.totalHits / 12)
    });
  }
}
  
  onFormSubmit = (event, { value }) => {
     event.preventDefault();
    this.setState({ query: value });

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