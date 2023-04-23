import React from "react";
import ProjectName from "../atoms/ProjectName";
import projectContents from "../../projectContents.json";

export default function UlProject() {
  return (
    <ul className="bg-indigo-100 max-w-screen-xl mx-auto grid grid-cols-3 justify-items-center gap-8 py-8">
      {projectContents.map((v, i) => {
        return (
          <ProjectName
            key={i}
            index={i}
            title={v.title}
            image={v.image}
            desc={v.desc}
          />
        ); // map함수로 json 파일 받아오고 PortfolioCard의 props 적용
      })}
    </ul>
  );
}
