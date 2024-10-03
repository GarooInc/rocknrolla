import React from 'react';
import Script from 'next/script';

const VimeoEmbed = ({ id }) => {
  const url = `https://player.vimeo.com/video/${id}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`;

  return (
    <div className='relative w-full' style={{ minHeight: '400px', height: '100%', overflow: 'hidden' }}>
      <iframe 
        src={url}
        frameBorder="0" 
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
        className='absolute top-0 left-0 w-full h-full'
        style={{ minHeight: '400px' }} // Forzando la altura mínima
        title="SATURNO máster gt">
      </iframe>
      <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload"></Script>
    </div>
  );
};

export default VimeoEmbed;