import { useState } from "react";
import { Routes, Route } from "react-router-dom"

import { effectsContext } from "./contexts";

import Header from "./components/Header";
import Landing from "./components/Landing";
import Shop from "./components/Shop";
import Bag from "./components/Bag";
import About from "./components/About";
import Gallery from "./components/Gallery";

function App() {
  const [modalItem, setModalItem] = useState("");
  const [expandSearchBar, setExpandSearchBar] = useState(false);
  const [scrollBreakPoint, setScrollBreakPoint] = useState(false);

  const handleScroll = () => {
    const element = document.querySelector(".wrapper")
    if (element.scrollTop > 69) {
        setScrollBreakPoint(true);
    } else {
        setScrollBreakPoint(false);
    }
  };
  return (
    <effectsContext.Provider
      value={{
        modalItem,
        setModalItem,

        expandSearchBar,
        setExpandSearchBar,

        scrollBreakPoint,
        setScrollBreakPoint
      }}
    >
        <Header />
      <div className={`wrapper ${scrollBreakPoint && "scrolled-landing"}`} onScroll={handleScroll}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </effectsContext.Provider>
  );
}

export default App;
