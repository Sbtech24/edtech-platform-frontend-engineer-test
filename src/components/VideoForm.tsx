"use client";

import { useForm, SubmitHandler } from "react-hook-form";

interface FormTypes {
  name: string;
  description: string;
  url: string;
}

interface VideoFormProps {
  onAdd: (data: FormTypes) => void;
}

const VideoForm: React.FC<VideoFormProps> = ({onAdd}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormTypes>();

  const onSubmit: SubmitHandler<FormTypes> = (data) => {
    console.log("Form Submitted:", data);
    onAdd(data)
    reset(); 
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-3 p-4 bg-white shadow rounded-lg"
    
    >
      {/* Video Name */}
      <div>
        <label className="block mb-1 font-medium">Video Name</label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          className="w-full p-2 border rounded"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          {...register("description")}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* YouTube URL */}
      <div>
        <label className="block mb-1 font-medium">YouTube URL</label>
        <input
          type="text"
          {...register("url", {
            required: "URL is required",
            pattern: {
              value: /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/,
              message: "Enter a valid YouTube URL",
            },
          })}
          className="w-full p-2 border rounded"
        />
        {errors.url && (
          <p className="text-red-500 text-sm">{errors.url.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Add Video
      </button>
    </form>
  );
};

export default VideoForm;
