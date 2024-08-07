/* eslint-disable no-unused-vars */

import CourseThumbnail from "../ui/CourseThumbnail";

import { useNavigate } from "react-router-dom";

export default function Courses() {
  const navigate = useNavigate();

  return (
    <div className="w-full p-4 h-full">
      <div className="w-full">
        <h1 className="text-3xl font-bold px-1 pb-2">Current Courses</h1>
      </div>

      <div className="w-full flex py-8 bg-slate-100 shadow-xl">
        <div className="w-1/2 px-2">
          <img className="w-full" src="./default_image.png" alt="thumbnail" />
        </div>
        <div className="w-1/2 p-4 ">
          <p className="text-2xl font-bold pb-2">Course Name</p>
          <p className="text-lg font-medium">
            A video description provides information about the video&apos;s
            content, including its purpose, key points, and relevant links. It
            enhances viewer understanding and engagement, often boosting search
            visibility and accessibility.
          </p>
          <button
            className="w-full  bg-blue-600 text-slate-50 rounded-md font-bold text-sm p-1 my-8"
            onClick={() => {
              navigate("/course");
            }}
          >
            Continue Course
          </button>
        </div>
      </div>

      <div className="w-full pt-10">
        <h1 className="text-3xl font-bold px-1">Ongoing Courses</h1>
      </div>
      <div className="flex flex-wrap pt-4 pb-12">
        <CourseThumbnail progress={63} />
        <CourseThumbnail progress={93} />
        <CourseThumbnail progress={87} />
      </div>

      <div className="w-full">
        <h1 className="text-3xl font-bold px-1">Courses Not Started</h1>
      </div>
      <div className="flex flex-wrap pt-4 pb-12">
        <CourseThumbnail progress={0} />
        <CourseThumbnail progress={0} />
        <CourseThumbnail progress={0} />
      </div>

      <div className="w-full">
        <h1 className="text-3xl font-bold px-1">Courses Completed</h1>
      </div>
      <div className="flex flex-wrap pt-4 pb-20">
        <CourseThumbnail progress={100} />
        <CourseThumbnail progress={100} />
      </div>
    </div>
  );
}
