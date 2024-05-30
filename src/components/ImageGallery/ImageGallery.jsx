import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css'

export default function ImageGallery({ items, onImageClick }) {
  return (
    <ul className={css.gallery}>
      {items.map(item => (
        <li key={item.id}>
          <ImageCard
            item={item}
            onImageClick={() => onImageClick(item.urls.regular)}
          />
        </li>
      ))}
    </ul>
  );
}
