import React from 'react';

export default function PagePicker({ page, handlePageChange }) {
  const handleDecrease = () => {
    if (page >= 2 && page <= 10) {
      handlePageChange(-1);
    }
  };

  const handleIncrease = () => {
    if (page >= 1 && page <= 9) {
      handlePageChange(1);
    }
  };
  return (
    <div className='page-picker'>
      <button onClick={() => handleDecrease()}>&#60;</button>
      <span>Page {page} of 10</span>
      <button onClick={() => handleIncrease()}>&#62;</button>
    </div>
  );
}
