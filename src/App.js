import { useState } from "react";
import { Routes, Route } from "react-router-dom"

import Desserts from "./components/Desserts";
import Header from "./components/Header";
import Landing from "./components/Landing";

import { effectsContext } from "./contexts";

function App() {
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
          <Route path="/desserts" element={<Desserts />}/>
        </Routes>
      </div>
    </effectsContext.Provider>
  );
}

export default App;
