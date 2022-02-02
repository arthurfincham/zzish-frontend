import React, { useState } from 'react';

export default function Giph({ giph }) {
  const [showModal, setShowModal] = useState(false);

  const handleGiphClick = () => {
    setShowModal(true);
  };

  const modal = (
    <div className='modal'>
      <button onClick={() => setShowModal(false)}>CLOSE</button>
      <img
        src={giph.images.original.url}
        width={giph.images.original.width}
        height={giph.images.original.height}
      />
      <div className='modal-info'>
        <p>{giph.title}</p>
        <p>{giph.username}</p>
        <p>{giph.import_datetime}</p>
      </div>
    </div>
  );

  return (
    <>
      <img
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
