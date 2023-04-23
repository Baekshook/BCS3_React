import React from "react";
import Header from "@components/organism/Header";
import Main from "@components/organism/Main";
import Footer from "@components/organism/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "src/pages/Portfolio";

export default function MyPortfolio() {
  return (
    <BrowserRouter>
      <div className="bg-red-100 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
