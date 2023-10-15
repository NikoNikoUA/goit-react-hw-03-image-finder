import React, { PureComponent } from 'react';
import './ImageGalleryItem.css';
import { ModalWindow } from '../Modal/Modal';

class ImageGalleryItem extends PureComponent {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    const { tags, image, largeImageURL } = this.props;
    return (
      <>
        <img
          className="image"
          src={image}
          alt={tags}
          onClick={this.openModal}
          loading="lazy"
        />
        <ModalWindow
          isModalOpen={isModalOpen}
          closeModal={this.closeModal}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      </>
    );
  }
}

export default ImageGalleryItem;
