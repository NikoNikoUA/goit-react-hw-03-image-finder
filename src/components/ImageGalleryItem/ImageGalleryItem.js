import './ImageGalleryItem.css';

export const ImageGalleryItem = ({ tags, image }) => {
  return (
    <li className="gallery-item">
      <img className="image" src={image} alt={tags} />
    </li>
  );
};
