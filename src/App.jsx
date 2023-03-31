import Header from "@components/Header";
import Main from "@components/Main";
import Footer from "@components/Footer";

function App() {
  return (
    <>
      <div className="bg-red-100 min-h-screen">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;

// max-w-screen-xl 1200px까지만 늘어나게, mx-auto 자동 정렬, h-full 높이가 부모랑 똑같아짐
