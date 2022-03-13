import { useContext } from "react";

import { expandContext } from "../contexts";

function SideBar() {
  const { setExpandSearchBar, setVisibleContent } = useContext(expandContext);
  const handleClick = (e) => {
      setVisibleContent(e.target.alt);
      setExpandSearchBar(false);
  }

  return (
    <section className="sidebar">
      <div>menu</div>
      <nav>
        <img onClick={handleClick} src="" alt="1" />
        <img onClick={handleClick} src="" alt="2" />
        <img onClick={handleClick} src="" alt="3" />
        <img onClick={handleClick} src="" alt="4" />
        <img onClick={handleClick} src="" alt="5" />
      </nav>
    </section>
  );
}

export default SideBar;
