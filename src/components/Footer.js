import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="contact-wrapper">
        <Link to="/contact">Contact</Link>
      </div>
    </footer>
  );
}
export default Footer;
