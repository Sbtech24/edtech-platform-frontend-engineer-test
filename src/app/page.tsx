"use client"
import VideoForm from "@/components/VideoForm";
import VideoList from "@/components/VideoList";
import VideoPlayer from "@/components/VideoPlayer";
import { useState } from "react";
import { Video } from "@/types";


export default function Home() {
  const [videos,setVideos] = useState<Video[]>([])
  const [url,setUrl] = useState("")

  const addVideo = (video: Omit<Video,"id">) =>{
    setVideos((prev)=>[...prev,{...video,id:Date.now().toString()}])
  }


  const handleWatch = (selectedUrl:string)=>{
    setUrl(selectedUrl)
  }

const deleteVideo = (videoId: string) => {
  setVideos((prev) => prev.filter((video) => video.id !== videoId));
}
  

  return (
    
    <div>
      <VideoPlayer url={url}/>

      <VideoForm onAdd={addVideo}/>

      <VideoList data={videos} onWatch={handleWatch} onDelete={deleteVideo} />
    </div>
  );
}
