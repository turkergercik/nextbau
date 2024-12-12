"use client"
import React, { useEffect, useState } from "react";

const YouTubeVideos = ({router}) => {

  const [videos, setVideos] = useState([]);
  const API_KEY = "AIzaSyCSQ5n6d74Oe-0NlJBMtdmRCSuXVO3lD48";
  const CHANNEL_ID = "UCI-McyMd08P8O5I_aMpa5Vg";

  useEffect(() => {
    const fetchVideos = async () => {
        try {
          const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=3&order=date&type=video&key=${API_KEY}`
          );
          if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
          }
          const data = await response.json();
          setVideos(data.items); // Set the retrieved videos to state
        } catch (error) {
          console.error("Failed to fetch videos:", error);
        }
      };
  
      fetchVideos();
  }, []);
  const decodeHtmlEntities = (text) => {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text;
    return textarea.value;
  };
  return (
    <div className="w-full flex justify-center items-center  flex-col">

      <h1 className="text-3xl p-2">Latest Videos</h1>
      <div className="flex flex-1 flex-row w-full overflow-auto no-scrollbar">
      {videos.map((video) => (
        <div key={video.id.videoId} className="flex bg-gray-700 mx-5 py-2   rounded-lg flex-1 flex-col justify-between items-center">
          <h2 className="text-center p-1">{decodeHtmlEntities(video.snippet.title)}</h2>
          <iframe
          className="rounded-lg"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          
        </div>
      ))}
      </div>
      <button className=" bg-gray-700 p-2 m-4 rounded-full" onClick={()=>{ router.push(`https://www.youtube.com/channel/${CHANNEL_ID}`)}}>Visit the Channel</button>
    </div>
  );
};

export default YouTubeVideos;
