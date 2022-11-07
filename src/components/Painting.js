import defaultImage from '../logo.svg';
export default function Painting({
  imageUrl = defaultImage,
  title,
  profileUrl,
  author = 'underfined',
  price,
}) {
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Aвтор: <a href={profileUrl}>{author}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: заканчивается или есть в наличии</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}
