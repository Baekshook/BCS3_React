import React from "react";
import ProjectName from "../atoms/ProjectName";
import projectContents from "../../projectContents.json";

export default function UlProject() {
  return (
    <ul className="bg-indigo-100 max-w-screen-xl mx-auto grid grid-cols-2 justify-items-center gap-8 py-8">
      {projectContents.map((v, i) => {
        return (
          <ProjectName
            key={i}
            images={v.images}
            content={v.content}
            description={v.description}
          />
        );
      })}
    </ul>
  );
}
