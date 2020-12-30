import User1 from "./User1";
import DefaultUser from "./DefaultUser";
import User2 from "./User2";
import "./users.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Users() {
  return (
    <div className="users-container">
      <Router>
        <div className="users-navbar">
          <Link exact to="/users" className="users-nav-content">
            User1
          </Link>

          <Link to="/users/user2" className="users-nav-content">
            User2
          </Link>
        </div>
        <div className="users-content">
          <Switch>
            <Route exact path="/users">
              <User1 />
            </Route>

            <Route path="/users/user2">
              <User2 />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Users;
