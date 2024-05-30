import { useEffect, useState } from 'react';
import './App.css';
import getPhotos from '../unsplash-api-fetch';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getPhotos(searchQuery, page);
        setImages(prevImages => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [searchQuery, page]);

  const handleSearch = newQuery => {
    setSearchQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMoreClick = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {isError && <ErrorMessage />}
      {images.length > 0 && <ImageGallery items={images} />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMoreClick} />
      )}
      {isLoading && <Loader />}
    </>
  );
}

export default App;
