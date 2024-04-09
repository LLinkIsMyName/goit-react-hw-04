import style from './ImageCard.module.css';

const ImageCard = ({ imageUrl, alt, onClick }) => {
  return (
    <div className={style.card}>
      <img src={imageUrl} alt={alt} onClick={() => onClick({ imageUrl, alt })} />
    </div>
  );
}

export default ImageCard;
