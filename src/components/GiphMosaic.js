import React from 'react';
import Giph from './Giph';
export default function GiphMosaic({ giphs }) {
  return (
    <div className='giph-mosaic'>
      <div className='giph-mosaic-wrapper'>
        {giphs.map((giph) => {
          return <Giph giph={giph} />;
        })}
      </div>
    </div>
  );
}
