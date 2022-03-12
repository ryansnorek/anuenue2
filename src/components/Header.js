import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [expand, setExpand] = useState(false);
  const handleChange = () => {};
  return (
    <header>
      <nav>
        <div className="search-bar">
          <img
            className="search"
            onClick={() => setExpand(!expand)}
            src="../images/search.png"
            alt="search"
          />
          {expand && (
            <form>
              <input type="search" name="search" onChange={handleChange} />
            </form>
          )}
        </div>
        <div className="nav-bar">
          <Link to="/bag">Bag</Link>
          <div className="logo">Logo</div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
