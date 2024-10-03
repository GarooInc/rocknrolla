import React from 'react';
import Script from 'next/script';

const VimeoEmbed = ({ id }) => {
  const url = `https://player.vimeo.com/video/${id}?badge=0&autopause=0&player_id=0&app_id=58479`;

  return (
    <div className="video-container md:pt-[56.25%] pt-80" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <iframe
        src={url}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        className="video-frame"
        title="Vimeo Video"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          transform: 'translate(-50%, -50%) scale(1.2)', // Escala para simular "cover"
          transformOrigin: 'center',
        }}
      />
      <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload"></Script>
    </div>
  );
};

export default VimeoEmbed;