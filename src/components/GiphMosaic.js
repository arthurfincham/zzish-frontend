import React from 'react';

export default function GiphMosaic({ giphs }) {
  return (
    <div className='giph-mosaic'>
      {giphs.map((giph) => {
        return (
          <img
            src={giph.images.fixed_height.url}
            width={giph.images.fixed_height.url}
            height={giph.images.fixed_width.height}
          />
        );
      })}
    </div>
  );
}
