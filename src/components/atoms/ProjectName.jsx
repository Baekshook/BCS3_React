import React from 'react'

export default function ProjectName({ title, desc, image }) {
  return (
    <li className="bg-purple-300 w-60 h-72 rounded-xl">
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
    </li>
  );
}
