import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imageLogo from "../../static/4all_logo.svg";

const Menu = (props) => {
  return (
    <ul className="navbar-nav bg-gradient-success sidebar sidebar-dark">
      <a
        className="p-4 d-flex align-items-center justify-content-center"
        href="/"
      >
        <img src={imageLogo} alt="Home" style={{ width: "45px" }} />
        {/* <div className="sidebar-brand-text mx-3">4all wfc</div> */}
      </a>

      {/* <hr className="sidebar-divider my-0" /> */}
      <hr className="sidebar-divider" />

      <div className="row">
        <div className="col-10 mx-auto mb-2">
          <a href="/solicitacao-nova" className="btn btn-warning btn-block ">
            <FontAwesomeIcon icon={"plus"} fixedWidth />
            Nova Solicitação
          </a>
        </div>
      </div>

      <hr className="mt-2 sidebar-divider" />

      <div className="sidebar-heading">Solicitações</div>

      <li className="nav-item">
        <a className="nav-link" href="html.html">
          <i>
            <FontAwesomeIcon icon={"pause-circle"} fixedWidth />
          </i>
          <span>Pendentes</span>
        </a>
      </li>
      <li className="active nav-item">
        <a className="active nav-link" href="html.html">
          <i>
            <FontAwesomeIcon icon={"tasks"} fixedWidth />
          </i>
          <span>Em Andamento</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="html.html">
          <i>
            <FontAwesomeIcon icon={"check-double"} fixedWidth />
          </i>
          <span>Concluídas</span>
        </a>
      </li>

      <hr className="mt-2 pb-3 sidebar-divider" />

      <div className="sidebar-heading">Sistema</div>

      <li className="nav-item">
        <a className="nav-link" href="html.html">
          <i>
            <FontAwesomeIcon icon={"store"} fixedWidth />
          </i>
          <span>Empesas</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="html.html">
          <i>
            <FontAwesomeIcon icon={"user-tag"} fixedWidth />
          </i>
          <span>Perfils</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="html.html">
          <i>
            {" "}
            <FontAwesomeIcon icon={"boxes"} fixedWidth />
          </i>
          <span>Setores</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="html.html">
          <i>
            {" "}
            <FontAwesomeIcon icon={"shapes"} fixedWidth />
          </i>
          <span>Recursos</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="html.html">
          <i>
            {" "}
            <FontAwesomeIcon icon={"users"} fixedWidth />
          </i>
          <span>Colaboradores</span>
        </a>
      </li>
    </ul>
  );
};

export default Menu;
