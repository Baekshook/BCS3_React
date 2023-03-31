import React from "react";

export default function Header() {
  return (
    <header className="bg-blue-200 h-12 md:h-20">
      <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center">
        <div>Eunchan's Portfolio</div>
        <ul className="flex gap-2 md:gap-8 text-xs md:text-base">
          <li className="bg-indigo-300 btn-style">Introduce</li>
          <li className="bg-purple-300 btn-style">Portfolio</li>
          <li className="bg-blue-300 btn-style">Contact Me</li>
        </ul>
      </div>
    </header>
  );
}
