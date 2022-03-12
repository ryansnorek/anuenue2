import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import useForm from "../hooks/useForm";

function Header() {
  const inputRef = useRef();
  const [expand, setExpand] = useState(false);
  const [formValues, handleChange, clearForm] = useForm({ search: "" });
  const handleClick = () => setExpand(!expand);
  const handleSubmit = (e) => clearForm(e);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [expand])

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
          {expand && (
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
