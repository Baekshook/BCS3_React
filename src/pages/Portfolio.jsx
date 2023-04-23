import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function Portfolio() {
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title");
  const desc = searchParams.get("desc");
  const image = searchParams.get("image");

  return (
    <div className="bg-green-100 max-w-screen-xl mx-auto w-full grow flex flex-col justify-center items-center py-8 ">
      <div>
        <img src={`${process.env.PUBLIC_URL}/${image}`} alt="images" />
      </div>
      <div>{title}</div>
      <div>{desc}</div>
    </div>
  );
}
