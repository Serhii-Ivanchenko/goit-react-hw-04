import { useEffect } from 'react';
import './App.css';
import getPhotos from '../unsplash-api-fetch';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  // useEffect(() => {
  //   getPhotos();
  // });

  const handleSearch = query => {
   console.log(query);
   getPhotos(query);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
    </>
  );
}

export default App;
