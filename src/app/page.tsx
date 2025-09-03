import VideoForm from "@/components/VideoForm";
import VideoPlayer from "@/components/VideoPlayer";
import Image from "next/image";

export default function Home() {
  return (
    
    <div className="">
      <VideoPlayer/>
      <VideoForm/>
    </div>
  );
}
