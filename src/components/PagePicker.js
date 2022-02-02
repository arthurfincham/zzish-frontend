import React from 'react';

export default function PagePicker({ page, handlePageChange }) {
  return (
    <div className='page-picker'>
      <button>&#60;</button>
      <span>Page {page} of 10</span>
      <button>&#62;</button>
    </div>
  );
}
