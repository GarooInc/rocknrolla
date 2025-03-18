"use client";
import React, { useState, useEffect, useRef } from "react";
import PocketBase from "pocketbase";
import { useTranslation } from "react-i18next";

const BlogSquares = ({ tag }) => {
  const [blogs, setBlogs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const api = process.env.NEXT_PUBLIC_API_URL;
  const pb = new PocketBase(api);
  pb.autoCancellation(false);
  const { i18n, t } = useTranslation();
  const currentLocale = i18n.language;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const records = await pb.collection("blog").getFullList({
          sort: "created",
        });
        setBlogs(records);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [tag]);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollY = containerRef.current.scrollTop;
      const totalHeight = containerRef.current.scrollHeight - containerRef.current.clientHeight;
      const newIndex = Math.round((scrollY / totalHeight) * (blogs.length - 1));
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="relative flex md:gap-12 gap-8 md:px-32">
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex flex-col gap-12 md:overflow-y-auto md:h-[800px] md:pr-8"
      >
        {blogs.map((blog, index) => (
          <div key={index} className="w-full flex md:flex-row flex-col md:gap-8 gap-2 animation cursor-pointer">
            <img
              src={`${api}/api/files/${blog.collectionId}/${blog.id}/${blog.cover}?token=`}
              alt={blog[`title_${currentLocale}`]}
              className="md:h-[300px] object-cover flex-1 lg:w-1/2"
            />
            <div className="flex-1 flex flex-col gap-2 relative md:p-2 p-8 lg:w-1/2">
              {blog[`title_${currentLocale}`] && (
                <span
                  className="uppercase font-certia font-bold text-black xl:text-xl text-lg"
                  dangerouslySetInnerHTML={{ __html: blog[`title_${currentLocale}`] }}
                ></span>
              )}
              <p
                className="font-certia text-sm xl:text-xl leading-6 tracking-wide text-start text-black font-semibold"
                dangerouslySetInnerHTML={{ __html: blog[`desc_${currentLocale}`] }}
              ></p>
              <div className="absolute md:bottom-2 md:right-2 bottom-4 right-8">
                <span className="text-black font-certia text-sm font-medium underline italic">
                  {t("general:read_now")}
                </span>
                <span className="text-black font-certia text-sm font-medium italic">{">"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="md:absolute md:right-10 md:top-0 h-full md:flex items-center hidden">
            <div className="relative h-full w-[2px] bg-gray-300">
            <div
                className="absolute w-[20px] h-[20px] bg-black rounded-full transition-all"
                style={{ top: `${(currentIndex / (blogs.length - 1)) * 100}%`, left: "-8px" }}
                onClick={() => containerRef.current.scrollTo({ top: (currentIndex / (blogs.length - 1)) * containerRef.current.scrollHeight, behavior: "smooth" })}
            ></div>
            </div>
        </div>
    </div>
  );
};

export default BlogSquares;