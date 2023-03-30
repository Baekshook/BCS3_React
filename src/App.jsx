import Apple from "./images/logogo.gif";

function App() {
  return (
    <div className="bg-red-100 min-h-screen">
      <header className="bg-blue-400 h-12 md:h-20">
        <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center">
          {/* <div>Eunchan's Portfolio</div> */}
          <div>
            {" "}
            <img src={Apple} alt="logo" className="w-24" />
          </div>
          <ul className="flex gap-2 md:gap-8 text-xs md:text-base">
            <li className="bg-indigo-300 btn-style">Introduce</li>
            <li className="bg-purple-300 btn-style">Portfolio</li>
            <li className="bg-blue-300 btn-style">Contact Me</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;

// max-w-screen-xl 1200px까지만 늘어나게, mx-auto 자동 정렬, h-full 높이가 부모랑 똑같아짐
