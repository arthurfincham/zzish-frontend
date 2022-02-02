import React, { useState } from 'react';
import SearchBox from './components/SearchBox';
import './App.css';

function App() {
  const [query, updateQuery] = useState();

  const handleTyping = (e) => {
    updateQuery(e);
  };

  return (
    <div className='App'>
      <SearchBox query={query} handleTyping={handleTyping} />
    </div>
  );
}

export default App;
