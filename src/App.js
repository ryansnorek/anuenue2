import { useState } from "react";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";

import { expandContext } from "./contexts";

function App() {
  const [expandSearchBar, setExpandSearchBar] = useState(false);
  return (
    <expandContext.Provider value={{ expandSearchBar, setExpandSearchBar }}>
      <div>
        <Header />
        <SideBar />
      </div>
    </expandContext.Provider>
  );
}

export default App;
