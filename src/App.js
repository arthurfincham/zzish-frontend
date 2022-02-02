import React, { useState } from 'react';
import SearchBox from './components/SearchBox';
import PagePicker from './components/PagePicker';
import GiphMosaic from './components/GiphMosaic';
import { fetchGiphs } from './API';
import './App.css';

function App() {
  const [query, updateQuery] = useState('');

  const [page, setPage] = useState(1);

  const [giphs, updateGiphs] = useState([]);

  const handleTyping = (e) => {
    updateQuery(e);
    fetchGiphs(query, page, updateGiphs);
  };

  const handlePageChange = (direction) => {
    setPage(page + direction);
    fetchGiphs(query, page, updateGiphs);
  };

  return (
    <div className='App'>
      <nav>
        <h1>Giphy Search</h1>
        <SearchBox query={query} handleTyping={handleTyping} />
      </nav>
      <GiphMosaic giphs={giphs} />
      <footer>
        <PagePicker page={page} handlePageChange={handlePageChange} />
      </footer>
    </div>
  );
}

export default App;
