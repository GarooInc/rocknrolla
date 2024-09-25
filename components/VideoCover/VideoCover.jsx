"use client"
import React, { useState } from "react";
import Image from "next/image";
import { MdOutlinePlayCircle } from "react-icons/md";

const VideoCover = ({ coverImage, videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full h-auto max-w-full">
      {isPlaying ? (
        <video
          className="w-full h-auto"
          controls
          autoPlay
          src={videoUrl}
          type="video/mp4"
        />
      ) : (
        <div className="relative cursor-pointer" onClick={handlePlay}>
          {/* Cover image */}
          <Image
            src={coverImage}
            alt="Video cover"
            layout="responsive"
            width={1920}
            height={1080}
            className="object-cover"
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
