import './ImageGallery.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = () => {
  return (
    <ul className="gallery">
      <ImageGalleryItem />
    </ul>
  );
};
