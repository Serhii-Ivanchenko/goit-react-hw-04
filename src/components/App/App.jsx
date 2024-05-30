import { useEffect, useState } from 'react';
import './App.css';
import getPhotos from '../unsplash-api-fetch';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';

function App() {
  const [images, setImages] = useState([]);

  const handleSearch = async query => {
    console.log(query);
    const data = await getPhotos(query);
    setImages(data);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && <ImageGallery items={images} />}
    </>
  );
}

export default App;
