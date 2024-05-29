import { useEffect } from 'react';
import './App.css';
import getPhotos from '../unsplash-api-fetch';

function App() {
  useEffect(() => {
    getPhotos()
  });

  return <></>;
}

export default App;
