import style from './ImageCard.module.css';

const ImageCard = ({ imageUrl, alt, onClick }) => {
  return (
    <div className={style.card} onClick={() => onClick({ imageUrl, alt })}>
      <img src={imageUrl} alt={alt} />
    </div>
  );
};

export default ImageCard;
