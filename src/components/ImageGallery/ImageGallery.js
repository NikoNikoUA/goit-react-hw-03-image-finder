import './ImageGallery.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul className="gallery">
      {images.map(({ id, tags, webformatURL, largeImageURL }) => {
        return (
          <li className="gallery-item" key={id}>
            <ImageGalleryItem
              tags={tags}
              image={webformatURL}
              largeImageURL={largeImageURL}
            />
          </li>
        );
      })}
    </ul>
  );
};
