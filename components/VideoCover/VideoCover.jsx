"use client"
import React, { useState } from "react";
import { MdOutlinePlayCircle } from "react-icons/md";

const VideoCover = ({ coverImage, videoUrl, isCover }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className={`relative w-full ${isCover ? "md:h-[600px]" : "md:h-[500px] md:w-[800px]"}`}>
      {isPlaying ? (
        <video
          className={`object-cover w-full ${isCover ? "md:h-[600px]" : "md:h-[500px] md:w-[800px]"}`}
          controls
          autoPlay
          src={videoUrl}
          type="video/mp4"
          onEnded={handleEnded}
        />
      ) : (
        <div className="relative cursor-pointer" onClick={handlePlay}>
          {/* Cover image */}
          <img
            src={coverImage}
            alt="Video cover"
            layout="responsive"
            className={`object-cover ${isCover ? "md:h-[600px] w-full" : "md:h-[500px] md:w-[800px]"}`}
          />

          {/* Play icon */}
          <div className="absolute inset-0 flex justify-center items-center">
            <MdOutlinePlayCircle className="text-white text-6xl md:text-8xl opacity-80 hover:opacity-100" />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCover;