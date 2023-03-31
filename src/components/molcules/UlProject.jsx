import React from "react";
import ProjectName from "../atoms/ProjectName";

export default function UlProject() {
  return (
    <ul className="bg-indigo-100 max-w-screen-xl mx-auto grid grid-cols-2 justify-items-center gap-8 py-8">
      <ProjectName />
      <ProjectName />
      <ProjectName />
      <ProjectName />
      <ProjectName />
      <ProjectName />
    </ul>
  );
}
