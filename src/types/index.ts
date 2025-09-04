interface Video {
  id: string;
  name: string;
  description: string;
  url: string;
}
interface VideoListProps {
  data: string[];
}


interface VideoListType{
    data: Video[],
    onWatch: (url: string) => void,
    onDelete: (id:string) => void
}

interface VideoPlayerProps {
  url: string;
}


export type { Video, VideoListProps,VideoListType,VideoPlayerProps};