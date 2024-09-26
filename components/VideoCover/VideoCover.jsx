"use client"
import React, { useState } from "react";
import Image from "next/image";
import { MdOutlinePlayCircle } from "react-icons/md";

const VideoCover = ({ coverImage, videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className="relative w-full md:h-[600px] max-w-full">
      {isPlaying ? (
        <video
          className="w-full md:h-[600px]"
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
            className="object-cover md:h-[600px] w-full"
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