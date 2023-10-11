import './ImageGalleryItem.css';

export const ImageGalleryItem = ({ id, webformatURL, largeImageURL }) => {
  return (
    <li key={id} className="gallery-item">
      <img className="image" src={webformatURL} alt={id} />
    </li>
  );
};
