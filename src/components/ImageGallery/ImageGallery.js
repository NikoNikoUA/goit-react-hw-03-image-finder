import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul className={css.gallery}>
      {images.map(({ id, tags, webformatURL, largeImageURL }) => {
        return (
          <li className={css.galleryItem} key={id}>
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
