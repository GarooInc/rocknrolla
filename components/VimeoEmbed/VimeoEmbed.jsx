import React from 'react';
import Script from 'next/script';

const VimeoEmbed = ({id}) => {
  const url = `https://player.vimeo.com/video/${id}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`;
  return (
    <div className='w-full md:h-[400px] h-[200px]'>
      <iframe 
        src={url}
        frameBorder="0" 
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
        className='w-full h-full'
        title="SATURNO máster gt">
      </iframe>
      <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload"></Script>
    </div>
  );
};

export default VimeoEmbed;