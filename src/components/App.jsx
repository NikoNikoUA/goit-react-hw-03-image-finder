import React, {PureComponent} from 'react';
// import '.'
import { Searchbar } from './Searchbar/Searchbar'
import { ImageGallery } from './ImageGallery/ImageGallery'
import { Button } from './Button/Button'
import {Modal} from './Modal/Modal'

class App extends PureComponent {
  
  render() {
  return(
    <div className="App">
 
      <Searchbar />
      <ImageGallery />
      <Button />
      <Modal />
    </div>
  )};
};

export default App;