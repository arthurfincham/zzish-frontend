import React, { useState } from 'react';
import SearchBox from './components/SearchBox';
import './App.css';

function App() {
  const [query, updateQuery] = useState();

  const [page, setPage] = useState(1);

  const handleTyping = (e) => {
    updateQuery(e);
  };

  const handlePageChange = (direction) => {
    setPage(page + direction);
  };

  return (
    <div className='App'>
      <SearchBox query={query} handleTyping={handleTyping} />
    </div>
  );
}

export default App;
