import React from 'react'

export default function ProjectName(props) {
  return (
    <li className="bg-purple-300 w-60 h-72 rounded-xl">
      {/* object-fit: cover */}
      <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
        {props.images}
      </div>
      <div className="text-xl font-bold mt-2 mx-2">{props.content}</div>
      <div className="mt-2 mx-2">{props.description}</div>
    </li>
  );
}
