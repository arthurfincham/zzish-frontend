import React, { useState } from 'react';
import SearchBox from './components/SearchBox';
import PagePicker from './components/PagePicker';
import { fetchGiphs } from './API';
import './App.css';

function App() {
  const [query, updateQuery] = useState('');

  const [page, setPage] = useState(1);

  const [giphs, updateGiphs] = useState([]);

  const handleTyping = (e) => {
    updateQuery(e);
    fetchGiphs(page, query, updateGiphs);
  };

  const handlePageChange = (direction) => {
    setPage(page + direction);
  };

  return (
    <div className='App'>
      <SearchBox query={query} handleTyping={handleTyping} />
      <PagePicker page={page} handlePageChange={handlePageChange} />
    </div>
  );
}

export default App;
