"use client";
import VideoForm from "@/components/VideoForm";
import VideoList from "@/components/VideoList";
import VideoPlayer from "@/components/VideoPlayer";
import { useState } from "react";
import { Video } from "@/types";
import { logo } from "@/assets";
import Image from "next/image";
import { Sun,Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect,useContext } from "react";
import { Button } from "@/components/ui/button";
import { ThemeProviderContext } from "@/components/context/ThemeContex";

export default function Home() {
   const { toggleTheme, theme } = useContext(ThemeProviderContext);
    const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
 
  const defaultVideos: Video[] = [
  {
    id: "1",
    name: "Ustackschool",
    description: "Ustackschool project management course",
    url: "https://youtu.be/uSz4dQyG9g8",
  },
  {
    id: "2",
    name: "AI in Education",
    description: "How artificial intelligence is shaping the future of learning.",
    url: "https://www.youtube.com/watch?v=2ePf9rue1Ao",
  },
  {
    id: "3",
    name: "Future of Online Learning",
    description: "Exploring how digital platforms are transforming education worldwide.",
    url: "https://www.youtube.com/watch?v=OUv0A9hg7Jg",
  },
  {
    id: "4",
    name: "Building Habits for Learning",
    description: "Practical strategies to improve focus and learning outcomes.",
    url: "https://www.youtube.com/watch?v=AdKUJxjn-R8",
  },
];

  const [videos, setVideos] = useState<Video[]>(defaultVideos);
  const [url, setUrl] = useState<string>(defaultVideos[0].url); 

  const addVideo = (video: Omit<Video, "id">) => {
    setVideos((prev) => [...prev, { ...video, id: Date.now().toString() }]);
  };

  const handleWatch = (selectedUrl: string) => {
    setUrl(selectedUrl);
  };

  const deleteVideo = (videoId: string) => {
    setVideos((prev) => prev.filter((video) => video.id !== videoId));
    if (url && videos.find((v) => v.id === videoId)?.url === url) {
      setUrl("");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <header className="flex items-center justify-between">
        <Image src={logo} alt="Ustackschool Logo" width={60} className="rounded-full"/>
        <Button
      variant="ghost"
      size="icon"
      onClick={() => toggleTheme()}
      className="cursor-pointer"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
      </header>
      <VideoPlayer url={url} />

      <VideoForm onAdd={addVideo} />

      <VideoList data={videos} onWatch={handleWatch} onDelete={deleteVideo} />
    </div>
  );
}
