import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <img className="search" src="../images/search.png" alt="search" />
        <div className="nav-bar">
            <Link to="/bag">Bag</Link>
            <div className="logo">Logo</div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
