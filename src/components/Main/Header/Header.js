import "./header.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <Router>
        <ul className="navbar">
          <li className="nav-content">
            <Link to="/" className="nav-content">
              Home
            </Link>
          </li>
          <li className="nav-content">
            <Link to="/about" className="nav-content">
              About
            </Link>
          </li>
          <li className="nav-content">
            <Link to="/users" className="nav-content">
              Users
            </Link>
          </li>
        </ul>
      </Router>
    </div>
  );
}

export default Header;
