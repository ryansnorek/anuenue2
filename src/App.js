import { useState } from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";

import { effectsContext } from "./contexts";

function App() {
  const [expandSearchBar, setExpandSearchBar] = useState(false);
  const [visibleContent, setVisibleContent] = useState("");
  const [scrollBreakPoint, setScrollBreakPoint] = useState(false);


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
      <div>
        <Header />
        <main>
          <Landing />
        </main>
      </div>
    </effectsContext.Provider>
  );
}

export default App;
