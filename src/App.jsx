import PrtuseState from "@components/PrtuseState";
import Calculator from "@components/Calculator";
import Div1 from "@components/Div1";
import Div2 from "@components/Div2";
import Div3 from "@components/Div3";

function App() {
  return (
    <>
      {/* <Calculator /> */}
      <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
        <Div1 />
        <Div2 />
        <Div3 />
      </div>
    </>
  );
}

export default App;

// max-w-screen-xl 1200px까지만 늘어나게, mx-auto 자동 정렬, h-full 높이가 부모랑 똑같아짐
