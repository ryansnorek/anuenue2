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
        <img onClick={handleClick} src="../images/icons/cookie.png" alt="one" />
        <img onClick={handleClick} src="../images/icons/bread.png" alt="two" />
        <img onClick={handleClick} src="../images/icons/cupcake.png" alt="three" />
        <img onClick={handleClick} src="" alt="four" />
        <img onClick={handleClick} src="" alt="five" />
      </nav>
    </section>
  );
}

export default SideBar;
