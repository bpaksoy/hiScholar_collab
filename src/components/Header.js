import React from "react";
import {Navbar} from "react-materialize";


const Header = () =>{
  return (
    <div>
      <Navbar className="navigation">
        <div className="nav-wrapper">
          <a href="/profile" className="brand-logo">HiScholar</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/sign_out">Sign out</a></li>
            <li><a href="/forgot_password">Forgot password?</a></li>
          </ul>
       </div>
      </Navbar>
    </div>
  );
}

export default Header;
