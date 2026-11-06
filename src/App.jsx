import { useState, useEffect, useCallback } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import apiKey from './config';
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoList from './components/PhotoList';

function App() {
  // State for the three default topics and for user searches
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [birds, setBirds] = useState([]);
  const [searchPhotos, setSearchPhotos] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');

  // Fetches photos from Pixabay for a query and saves them with the given setter.
  // Defaults to the search state so the Search component only needs to pass the query.
  const fetchData = useCallback(async (query, setter = setSearchPhotos) => {
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&per_page=16`
      );
      const data = await response.json();
      setter(data.hits);
      // Remember the search term so it can be used as the page title
      if (setter === setSearchPhotos) setSearchTitle(query);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  // Load the three default topics once when the app first loads
  useEffect(() => {
    fetchData('cats', setCats);
    fetchData('dogs', setDogs);
    fetchData('birds', setBirds);
  }, [fetchData]);

  return (
    <div className="container">
      {/* Search and Nav are outside <Routes> so they show on every route */}
      <Search fetchData={fetchData} />
      <Nav />
      <Routes>
        {/* Home redirects to the first static route */}
        <Route path="/" element={<Navigate to="/cats" replace />} />
        {/* Three static topic routes, all reusing PhotoList */}
        <Route path="/cats" element={<PhotoList photos={cats} title="Cat Gifs" />} />
        <Route path="/dogs" element={<PhotoList photos={dogs} title="Dog Gifs" />} />
        <Route path="/birds" element={<PhotoList photos={birds} title="Bird Gifs" />} />
        {/* Route for user search queries */}
        <Route path="/search/:query" element={<PhotoList photos={searchPhotos} title={searchTitle} />} />
      </Routes>
    </div>
  );
}

export default App;