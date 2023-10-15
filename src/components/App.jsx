import React, { PureComponent } from 'react';
import { Hourglass } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import './App.css'
import { Searchbar } from './Searchbar/Searchbar'
import { ImageGallery } from './ImageGallery/ImageGallery'
import { Button } from './Button/Button'
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

   async componentDidUpdate(prevState) {
    
    try {
    const { query, currentPage } = this.state;
    this.setState({loading: true})
      if (currentPage !== prevState.currentPage || query !== prevState.query) {
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
  
  onFormSubmit = (value) => {
      this.setState({ query: value });
        console.log(value);

    if (this.state.query === value) {
      return;
    } else {
      this.setState({
        images: [],
        currentPage: 1,
      });
    }
  
  }

  onLoadMore = () => {
    this.setState(prevState => ({
         currentPage: prevState.currentPage + 1  
        }));
  }
 
  
render() {
    const { images, loading, error} = this.state;
  return(
    <div className="App">
      {error && toast.error(`Whoops, something went wrong: ${error.message}`)}
      <Searchbar onSubmit={ this.onFormSubmit} />
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
      {images.length > 0 ? <ImageGallery images={images} /> : null}
      {images.length ? <Button onLoadMore={ this.onLoadMore} /> : null }
      <ToastContainer autoClose={3000}/>
    </div>
  )
  };
}

export default App;