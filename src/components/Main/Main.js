import "./main.css";
import "./Header/header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from "../Users/Users";
import About from "../About/About";
import Home from "../Home/Home";

function Main() {
  return (
    <div className="main">
      <Router>
        <div className="header">
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
        </div>
        <div className="content">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Main;
