"use client";

import React, { useEffect, useState } from "react";
import { ColourfulText } from "./ui/colorful-text";
import Carousel from "./ui/carousel";
import Buttons from "./ui/buttons";
import Link from "next/link";

type Video = {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
};

const Videos = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch("/api/videos");
        if (!res.ok) throw new Error("Failed to fetch videos");
        const data = await res.json();
        setVideos(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error("Error fetching videos:", err.message);
          setError(err.message);
        } else {
          console.error("Unknown error:", err);
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) return <div>Loading videos...</div>;
  if (error) return <div>Error: {error}</div>;

  const slides = videos.map((video) => ({
    title: video.title,
    button: "Watch Video",
    src: video.thumbnail, // If using an img tag somewhere else, replace with <Image />
    link: video.link,
  }));

  return (
    <div className="w-full mx-auto my-32 p-8 overflow-hidden" id="videos">
      <h1>
        <ColourfulText text="Latest YouTube Videos" />
      </h1>

      <Carousel slides={slides} />
      <div className="flex justify-center p-9 z-50">
        <Link href="https://www.youtube.com/@NirajanKhatiwada/playlists" target="_blank">
          <Buttons
            text="View More"
            className="w-[15rem] text-3xl h-11rem text-justify cursor-pointer"
            ariaLabel="View More"
          />
        </Link>
      </div>
    </div>
  );
};

export default Videos;
