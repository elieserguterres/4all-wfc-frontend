import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <h1 className="h3 text-gray-800">{props.title}</h1>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="profile.html">
            <FontAwesomeIcon icon={"user"} />
            <span className="ml-2 d-none d-lg-inline text-gray-600 small">
              Eli Guterres
            </span>
          </a>
          <div
            className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="userDropdown"
          ></div>
        </li>
        <div className="topbar-divider d-none d-sm-block"></div>
        <li className="nav-item">
          <a className="nav-link" href="/sair">
            Sair
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
