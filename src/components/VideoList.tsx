import { useEffect, useState } from "react";
import { VideoListType } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const VideoList = ({ data, onWatch, onDelete }: VideoListType) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-3">Video List</h2>

      {loading ? (
        <div className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center justify-between space-x-4">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-5 w-48" />
              <Skeleton className="h-8 w-20" />
              <Skeleton className="h-8 w-20" />
            </div>
          ))}
        </div>
      ) : data.length === 0 ? (
        <p className="text-gray-500">No videos added yet.</p>
      ) : (
        <Table className="border rounded-lg overflow-hidden shadow-sm">
          <TableHeader>
            <TableRow className="bg-gray-50 dark:bg-black">
              <TableHead className="font-medium">Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="w-[180px] text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((video) => (
              <TableRow key={video.id}>
                <TableCell className="font-medium">{video.name}</TableCell>
                <TableCell className="text-gray-600">
                  {video.description.slice(0, 20) + "...." || "-"}
                </TableCell>
                <TableCell className="flex justify-center gap-2">
                  <Button
                
                    size="sm"
                    onClick={() => onWatch(video.url)}
                    className="cursor-pointer bg-gray-900 dark:text-white"
                  >
                    Watch
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => onDelete(video.id)}
                    className="cursor-pointer"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default VideoList;
