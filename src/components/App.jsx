import React, { PureComponent } from 'react';
import { Hourglass } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css'
import { Searchbar } from './Searchbar/Searchbar'
import { ImageGallery } from './ImageGallery/ImageGallery'
import { Button } from './Button/Button'
import { fetchImages }  from './Api/Api';

class App extends PureComponent {
  state = {
    query: '',
    page: 1,
    images: [],
    loading: false,
    error: false,
    loadMore: false,
  }

  async componentDidUpdate(prevState) {
  
    this.setState({ loading: true, error: false })
    if (this.state.page !== prevState.page || this.state.query !== prevState.query) {
      try {
        const { query, page } = this.state;
        const fetchedImages = await fetchImages(query, page);

        if (fetchedImages.hits.length === 0) {
          toast.info('There are no pictures matching your request')
        }
        
        this.setState(prevState => ({
          images: [...prevState.images, ...fetchedImages.hits],
          loadMore: page < Math.ceil(fetchedImages.totalHits / 12),
 
        }))
      }
          catch (error) {
        this.setState({ error: true })
      } finally {
        this.setState({ loading: false });
      }
    }
  }
  
  onFormSubmit = (value) => {
    const { query } = this.state;
    if (query === value) {
      return;
    }
      this.setState({ query: value, images: [],
        page: 1, error: false, loadMore: false });
  }

  onLoadMore = () => {
    this.setState(prevState => ({
         page: prevState.page + 1  
        }));
  }
 
  
render() {
    const { images, loading, error} = this.state;
  return(
    <div className={css.App}>
      <Searchbar onSubmit={this.onFormSubmit} />
      {error && toast.error(`Whoops, something went wrong. Try reloading the page`)}
      {loading && <Hourglass
  visible={true}
  height="60"
  width="60"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
        colors={['#306cce', '#72a1ed']}
        position="fixed" top="50%" left="50%" transform="translate(-50%, -50%)"

/>}
      {images.length > 0 && <ImageGallery images={images} />}
      {images.length ? <Button onLoadMore={this.onLoadMore} /> : null }
      <ToastContainer theme="colored" />
    </div>
  )
  };
}

export default App;