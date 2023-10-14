import './ImageGallery.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul className="gallery">
      {images.map(({ id, tags, webformatURL }) => {
        return <ImageGalleryItem key={id} tags={tags} image={webformatURL} />;
      })}
    </ul>
  );
};
