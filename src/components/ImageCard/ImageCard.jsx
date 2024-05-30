export default function ImageCard({ item }) {
  return (
    <div>
      <img src={item.urls.small} alt={item.alt_description} />
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
