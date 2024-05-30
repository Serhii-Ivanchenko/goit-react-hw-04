import { useEffect, useState } from 'react';
import './App.css';
import getPhotos from '../unsplash-api-fetch';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async query => {
    try {
      setIsLoading(true);
      setImages([]);
      console.log(query);
      const data = await getPhotos(query);
      setImages(data);
      setIsLoading(false);
    } catch (error) {
    } finally {
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <Loader />}
      {images.length > 0 && <ImageGallery items={images} />}
    </>
  );
}

export default App;
