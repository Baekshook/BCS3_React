import React from "react";

export default function ProjectName({ title, desc, image }) {
  return (
    <li className="bg-purple-300 w-60 h-72 rounded-xl relative">
      {/* object-fit: cover */}
      <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={`${process.env.PUBLIC_URL}/${image}`}
          alt="projectImg"
        />
      </div>
      <div className="text-xl font-bold mt-2 mx-2">{title}</div>
      <div className="mt-2 mx-2">{desc}</div>
      <button className=" absolute bottom-0 right-0 m-4 px-4 py-2 rounded-full bg-red-500">
        View
      </button>
    </li>
  );
}
