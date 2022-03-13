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
        <img onClick={handleClick} src="" alt="one" />
        <img onClick={handleClick} src="" alt="two" />
        <img onClick={handleClick} src="" alt="three" />
        <img onClick={handleClick} src="" alt="four" />
        <img onClick={handleClick} src="" alt="five" />
      </nav>
    </section>
  );
}

export default SideBar;
