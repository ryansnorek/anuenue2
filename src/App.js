import { useState } from "react";
import ItemWrapper from "./components/ItemWrapper";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";

import { expandContext } from "./contexts";

function App() {
  const [expandSearchBar, setExpandSearchBar] = useState(false);
  const [visibleContent, setVisibleContent] = useState("");

  return (
    <expandContext.Provider
      value={{
        expandSearchBar,
        setExpandSearchBar,
        visibleContent,
        setVisibleContent,
      }}
    >
      <div>
        <Header />
        <div className="main">
          <SideBar />
          <ItemWrapper />
        </div>
      </div>
    </expandContext.Provider>
  );
}

export default App;
