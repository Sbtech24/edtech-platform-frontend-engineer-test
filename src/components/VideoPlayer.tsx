import ReactPlayer from "react-player";
import { VideoPlayerProps } from "@/types";

const VideoPlayer = ({ url }: VideoPlayerProps) => {
  return (
    <div className="w-full flex justify-center items-center p-4">
      <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-black">
        <ReactPlayer 
          src={url || undefined} 
          width="100%" 
          height="100%" 
          controls 
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
