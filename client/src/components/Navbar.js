import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  async function logout() {
    try {
      await axios.get("/api/users/logout");
      localStorage.removeItem("currentUser");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/home">
        StaySure{" "}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          {user ? (
            <li className="nav-item dropdown">
              <button
                type="button"
                id="dropdownMenuButton"
                className="btn btn-secondary dropdown-toggle"
                aria-expanded="false"
                data-toggle="dropdown"
                aria-haspopup="true"
              >
                {user.name}
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <button className="dropdown-item" onClick={logout}>
                  Logout
                </button>
              </div>
            </li>
          ) : (
            <>
              <li className="nav-item active">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


