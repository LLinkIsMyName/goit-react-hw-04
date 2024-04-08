import ImageCard from '../ImageCard/ImageCard';
import style from "./ImageGallery.module.css";

const ImageGallery = ({ images, onClick }) => {
  return (
    <div>
      <ul className={style.imageGallery}>
        {images.map((image) => (
          <li key={image.id}>
            <ImageCard
              imageUrl={image.small}
              alt={image.alt}
              onClick={() => onClick(image)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
