export default function ImageCard({ item, onImageClick }) {
  return (
    <div>
      <img
        src={item.urls.small}
        alt={item.alt_description}
        onClick={onImageClick}
      />
      <ul>
        <li>
          <p>Photo by: {item.user.name}</p>
        </li>
        <li>
          <p>Likes: {item.likes}</p>
        </li>
      </ul>
    </div>
  );
}
