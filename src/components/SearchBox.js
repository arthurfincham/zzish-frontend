import React from 'react';

export default function SearchBox({ query, handleTyping }) {
  return (
    <input
      type='text'
      value={query}
      onChange={(e) => handleTyping(e.target.value)}
    />
  );
}
