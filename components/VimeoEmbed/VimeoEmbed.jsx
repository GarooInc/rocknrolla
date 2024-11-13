import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { IoPlayCircleOutline } from "react-icons/io5";

import Script from 'next/script';

const VimeoEmbed = ({ id, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const url = `https://player.vimeo.com/video/${id}?badge=0&autopause=0&player_id=0&app_id=58479`;

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handleCloseClick = () => {
    setIsPlaying(false);
  };

  return (
    <div className="video-wrapper w-full h-full">
      {!isPlaying ? (
        <div className="thumbnail-container" style={{ position: 'relative' }}>
          <img
            src={thumbnail}
            alt="Video thumbnail"
            style={{ width: '100%', display: 'block', cursor: 'pointer' }}
            onClick={handlePlayClick}
          />
          <button
            onClick={handlePlayClick}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'transparent',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            <IoPlayCircleOutline className='text-6xl text-white' />
          </button>
        </div>
      ) : (
        <div className="video-overlay w-full h-full" style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          zIndex: '1000',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <button
            onClick={handleCloseClick}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              backgroundColor: 'transparent',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '24px',
            }}
          >
            <FaTimes />
          </button>
          <div className="video-container" style={{ position: 'relative', width: '80%', height: '60%', overflow: 'hidden' }}>
            <iframe
              src={url}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              className="video-frame"
              title="Vimeo Video"
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
              }}
            />
            <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
          </div>
        </div>
      )}
    </div>
  );
};

export default VimeoEmbed;