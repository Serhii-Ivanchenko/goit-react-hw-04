import { useEffect, useState } from 'react';
import './App.css';
import getPhotos from '../unsplash-api-fetch';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = async query => {
    try {
      setIsLoading(true);
      setIsError(false);
      const data = await getPhotos(query);
      setImages(data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {isError && <ErrorMessage />}
      {images.length > 0 && <ImageGallery items={images} />}
      {isLoading && <Loader />}
    </>
  );
}

export default App;
