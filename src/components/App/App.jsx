import { useEffect } from 'react';
import './App.css';
import getPhotos from '../unsplash-api-fetch';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  useEffect(() => {
    getPhotos();
  });
  const handleSearch = () => {};

  return (
    <>
      <SearchBar onSearch={handleSearch} />
    </>
  );
}

export default App;
