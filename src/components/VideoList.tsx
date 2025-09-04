import { VideoListType } from "@/types";

const VideoList = ({ data,onWatch,onDelete }:VideoListType) => {
   

    const hanleWatch =(url:string)=>{
        onWatch(url)

    }

    const deleteVideo = (id:string)=>{
        onDelete(id)
    }

    
  return (
    <div>
      VideoList
      <div>
        {data.map((video, idx) => (
          <div key={idx}>
            <ul>
              <li>
                <h1>{video.name}</h1>
                <p>{video.description}</p>
                <p>{video.url}</p>
              </li>
            </ul>
            <div className="flex gap-2">
              <button className="border p-1" onClick={()=>hanleWatch(video.url)}>Watch</button>
              <button className="border p-1"onClick={()=>deleteVideo(video.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
