import React from 'react';
import Script from 'next/script';

const VimeoEmbed = ({id}) => {
  const url = `https://player.vimeo.com/video/${id}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`;
  console.log(url);
  return (
    <div className='w-full md:pt-60 p-40'>
      <iframe 
        src={url}
        frameBorder="0" 
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
        className='w-full'
        title="SATURNO máster gt">
      </iframe>
      <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload"></Script>
    </div>
  );
};

export default VimeoEmbed;