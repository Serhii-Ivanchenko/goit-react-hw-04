import { useEffect, useState } from 'react';
import './App.css';
import getPhotos from '../unsplash-api-fetch';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const {results, total_pages} = await getPhotos(searchQuery, page);
        setImages(prevImages => {
          return [...prevImages, ...results];
        });
        setShowLoadMoreBtn(total_pages && total_pages !== page);  
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

  const handleImageClick = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
  setIsModalOpen(false)
}

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      {isError && <ErrorMessage />}

      {images.length > 0 && <ImageGallery items={images} 
        onImageClick={handleImageClick} />}
      
      {images.length > 0 && !isLoading && showLoadMoreBtn && (
        <LoadMoreBtn onClick={handleLoadMoreClick} />
      )}
      
      {isLoading && <Loader />}
      <ImageModal isOpen={isModalOpen} onClose={handleModalClose} />
    </>
  );
}

export default App;
