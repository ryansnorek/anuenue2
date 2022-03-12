import { Link } from "react-router-dom";
import { useRef, useEffect, useContext } from "react";

import { expandContext } from "../contexts";
import useForm from "../hooks/useForm";

function Header() {
  const inputRef = useRef();
  const { expandSearchBar, setExpandSearchBar } = useContext(expandContext);
  const [formValues, handleChange, clearForm] = useForm({ search: "" });
  const handleClick = () => setExpandSearchBar(!expandSearchBar);
  const handleSubmit = (e) => clearForm(e);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [expandSearchBar])

  return (
    <header>
      <nav>
        <div className="search-bar">
          <img
            className="search"
            onClick={handleClick}
            src="../images/search.png"
            alt="search"
          />
          {expandSearchBar && (
            <form onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                type="search"
                name="search"
                value={formValues.search}
                onChange={handleChange}
              />
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
