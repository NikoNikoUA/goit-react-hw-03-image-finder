import './ImageGallery.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul className="gallery">
      {images.map(({ id }) => {
        return <ImageGalleryItem key={id} />;
      })}
    </ul>
  );
};
