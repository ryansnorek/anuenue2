import { useState } from "react";
import { Routes, Route } from "react-router-dom"

import Header from "./components/Header";
import Landing from "./components/Landing";
import Shop from "./components/Shop";
import Bag from "./components/Bag";

import { effectsContext } from "./contexts";

function App() {
  const [modalItem, setModalItem] = useState("");
  const [itemClicked, setItemClicked] = useState(false);
  const [expandSearchBar, setExpandSearchBar] = useState(false);
  const [visibleContent, setVisibleContent] = useState("");
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
        itemClicked,
        setItemClicked,
        expandSearchBar,
        setExpandSearchBar,
        visibleContent,
        setVisibleContent,
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
        </Routes>
      </div>
    </effectsContext.Provider>
  );
}

export default App;
