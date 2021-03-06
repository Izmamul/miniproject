import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <>
         <div className="container-fluid nav bg">
            <div className="row">
                <div className="col-10 mx-auto">  
 
            <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">Izmamul</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <img src="image/2044284_menu_hamburger_icon.png"  ></img>
      <span className="navbar-toggler-icon "></span>
      <i class="fas fa-bars"></i>
    
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink   activeClassName='menu_active' exact className="nav link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu_active'
          exact
           className="nav link active" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  activeClassName='menu_active' className="nav link active" aria-current="page" to="/Contact"> Contact </NavLink>
        </li>
        <li className="nav-item">
          <NavLink   activeClassName='menu_active' exact  className="nav link" to="/Service">Service</NavLink>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
        </div>
            </div>
        </div>  

        </>
    );
};

export{Navbar};