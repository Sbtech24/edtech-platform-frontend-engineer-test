import ReactPlayer from 'react-player'
import { VideoPlayerProps } from '@/types';

const VideoPlayer = ({ url }: VideoPlayerProps) => {
  return (
    <div>VideoPlayer
        <ReactPlayer src={url || undefined}/>
    </div>
  )
}

export default VideoPlayer