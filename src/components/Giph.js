import React, { useState } from 'react';

export default function Giph({ giph }) {
  const [showModal, setShowModal] = useState(false);

  const handleGiphClick = () => {
    setShowModal(true);
  };

  const modal = (
    <div className='modal'>
      <button
        className='modal-close-button'
        onClick={() => setShowModal(false)}
      >
        CLOSE
      </button>
      <img
        src={giph.images.original.url}
        width={giph.images.original.width}
        height={giph.images.original.height}
      />
      <div className='modal-info'>
        <p>Title: {giph.title}</p>
        <p>Author: {giph.username ? giph.username : 'Unknown'}</p>
        <p>Upload Time: {giph.import_datetime}</p>
      </div>
    </div>
  );

  return (
    <>
      <img
        className='mosaic-giph'
        onClick={() => handleGiphClick()}
        src={giph.images.fixed_height.url}
        width={giph.images.fixed_height.width}
        height={giph.images.fixed_height.height}
        alt='GIF'
      />
      {showModal ? modal : ''}
    </>
  );
}
